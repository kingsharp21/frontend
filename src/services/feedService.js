import apiconnection from "../api/general";

const getUserPreferenceFeed = async (body) => {
    console.log(body);
  const response = await apiconnection.get(
    `/preference`,
    body
  );
  return response.data;
};

const search = async (body) => {
    const response = await apiconnection.get(
        `/search`,
        body
    );
    return response.data;
};

const feedService = {
    getUserPreferenceFeed,
    search
};

export default feedService;
