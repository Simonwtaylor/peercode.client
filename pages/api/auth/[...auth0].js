import { handleAuth, handleCallback, handleLogin, getAccessToken, getSession,  } from '@auth0/nextjs-auth0';

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res);
      const { accessToken } = await getAccessToken(req, res);
      const { user } = await getSession(req, res);

      console.log(user);
      await fetch('http://localhost:5001/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(user),
        },
      )

    } catch (error) {
      console.log(error);
    }
  }
});