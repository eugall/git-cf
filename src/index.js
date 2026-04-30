export default {
  async fetch(request, env) {
    // This fetches the requested file (index.html, style.css, etc.) 
    // from your /docs folder automatically.
    const asset = await env.ASSETS.fetch(request);

    // If the file exists in /docs, return it
    if (asset.status !== 404) {
      return asset;
    }

    // Otherwise, return a simple 404 message
    return new Response("File not found in /docs", { status: 404 });
  },
};
