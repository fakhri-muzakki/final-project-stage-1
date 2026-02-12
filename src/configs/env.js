const required = (key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Environment variable ${key} belum di set`);
  }
  return process.env[key];
};

const env = {
  app: {
    port: Number(process.env.PORT) || 3000,
  },
};

export default env;
