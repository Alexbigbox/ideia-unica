async function tempo(request, response) {
  const dynamicDate = new Date();

  const subscribersResponse = await 
    fetch("https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhi01EvB90CIpsyw1e0fGRzPfw1Q");

  const subscribersResponseJson = await subscribersResponse.json();
  const inscritos = subscribersResponseJson.total_subscribers;

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  });
}

export default tempo;