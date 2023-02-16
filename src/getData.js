import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/BUITHICAMVAN/00b19d92dbcc9c6292e845dd76422dd2/raw/7beda9ed117c95d71691bc73932dbcf86275795e/CSV_color_file.csv";

export const getData = async () => {
  const data = await csv(csvUrl);

  console.log(data[0]);
  return data;
};
