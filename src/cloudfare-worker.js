// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetch(request, env) {
    const resp = await fetch(env.ASTRA_URL, {
      headers: { Authorization: `Bearer ${env.ASTRA_TOKEN}` },
    });
    return new Response(resp.body, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
