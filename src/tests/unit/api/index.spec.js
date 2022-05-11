import axios from 'axios';

import API from '@/api/index';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': process.env.VUE_APP_APIKey,
};

const origin = process.env.VUE_APP_APIOrigin;
const googleMapUrl = process.env.VUE_APP_GMAP_URL;
jest.mock('axios');

describe('getBreeds fetch data', () => {
  test('fetches successfully data from an API', async () => {
    const data = null;

    const config = {
      headers,
      params: undefined,
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(API.getBreeds()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `${origin}/breeds`, config,
    );
  });

  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(API.getBreeds()).rejects.toThrow(errorMessage);
  });
});

describe('getMapLocation fetch data', () => {
  test('fetches successfully data from an API', async () => {
    const data = null;

    const config = {
      params: undefined,
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(API.getMapLocation()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `${googleMapUrl}`, config,
    );
  });

  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(API.getMapLocation()).rejects.toThrow(errorMessage);
  });
});
