const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/node-react-google-charts_development",
      test: "postgres://postgres:postgres@localhost:5432/node-react-google-charts_test",
      e2e: "postgres://postgres:postgres@localhost:5432/node-react-google-charts_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
