

const App = async () => {
    const accessToken = "c730b8e8dfcd4c069950f09089f34f1b"; //only good for 11/28

    async function fetchWebApi(endpoint, method, body) {
        const res = await fetch(`https://api.spotify.com/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method,
          body:JSON.stringify(body)
        });
        return await res.json();
      }

      async function getTopTracks(){
        return (await fetchWebApi(
          'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
        )).items;
      }
      
      const topTracks = await getTopTracks();
      console.log(
        topTracks?.map(
          ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
        )
      );
}