import type { PageServerLoad } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export async function load({ request, platform }) {
    let result = await platform?.env.database.prepare(
        "SELECT * FROM users LIMIT 5"
      ).run();
      console.log(result)
      return new Response(JSON.stringify(result));
}