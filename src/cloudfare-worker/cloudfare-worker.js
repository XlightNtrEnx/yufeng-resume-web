// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetch(request, env, ctx) {
    return new Response(
      { hi: "hi" },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};
