import { exec } from "child_process";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import util from "node:util";

const execPromise = util.promisify(exec);

export async function GET(request: NextRequest) {
  const resetPath = request.nextUrl.searchParams.get("path");
  const secret = request.nextUrl.searchParams.get("secret");
  // Store responses to return them all at once
  const responses = [];

  // Check if secret token is valid
  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ statusText: "Invalid secret" }, { status: 401 });
  }

  // verify if we need to revalidate a path
  if (resetPath) {
    try {
      revalidatePath(resetPath);
      responses.push({ revalidate: true });
    } catch (error) {
      const message = `Error revalidating path ${resetPath}`;
      return NextResponse.json(
        { statusText: message, error: error },
        { status: 500 },
      );
    }
  }

  if (responses.length > 0) {
    return NextResponse.json({
      now: Date.now(),
      ...responses,
    });
  } else {
    return NextResponse.json(
      { statusText: "Nothing to revalidate" },
      { status: 200 },
    );
  }
}
