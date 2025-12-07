// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetch(request, env, ctx) {
    const path = new URL(request.url).pathname;
    const body = await request.json();

    return fetch(`${process.env.BASE_URL}/api/json/v1${path}`, {
      method: "POST",
      headers: {
        Token: process.env.TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
};
