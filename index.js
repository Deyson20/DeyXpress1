export default {
  async fetch(request, env, ctx) {
    return new Response("Hola mundo desde el Worker");
  },
};
