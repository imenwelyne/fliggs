import axios from "axios";
// import { ZYLA_KEY, RAPID_API_KEY, TECHNOSPECS_KEY } from "../utils/constants";
import next from "next";

const technoSpecKey = process.env.NEXT_PUBLIC_TECHNOSPECS_KEY;
const rapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const zylaKey = process.env.NEXT_PUBLIC_ZYLA_KEY;

export async function getBrands() {
  try {
    const response = await axios.get(
      `https://zylalabs.com/api/2281/mobile+phone+database+api/2162/get+brands`,

      {
        headers: {
          Authorization: zylaKey,
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response) {
      return response.data.map((item: any) => ({
        name: item.name,
        id: item.id,
      }));
    }
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}

export async function getModelsByBrand(brandId: string) {
  try {
    const response = await axios.get(
      `https://zylalabs.com/api/2281/mobile+phone+database+api/2163/get+phone+by+brand?brand_id=${brandId}`,

      {
        headers: {
          Authorization: zylaKey,
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response && response.data.data) {
      return response.data.data.map((item: any) => ({
        name: item.phone_name,
        id: item.id,
      }));
    }
  } catch (error) {
    console.error(
      "Error fetching models please review zyla's brands api:",
      error
    );
    return [];
  }
}

export async function getDeviceDetails(phoneId: string) {
  try {
    const response = await axios.get(
      `https://zylalabs.com/api/2281/mobile+phone+database+api/2164/get+phone+details?phone_id=${phoneId}`,

      {
        headers: {
          Authorization: zylaKey,
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response && response.data.all_specs.Network[0].info.includes("5G")) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(
      "Error fetching details please review zyla's phone details api:",
      error
    );
    return false;
  }
}

export async function getImeiDetailsZyla(imei: string) {
  try {
    const response = await axios.get(
      `https://zylalabs.com/api/932/imei+checker+api/750/imei+lookup?imei=${imei}`,

      {
        headers: {
          Authorization: zylaKey,
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response && response.data.valid) {
      if (response.data.deviceCategory.includes("5G")) {
        //1 SUPPORTS 5G
        return 1;
      }
      //0 DOESNT SUPPORT 5G
      return 0;
    } else {
      //2 INVALID
      return 2;
    }
  } catch (error) {
    console.error(
      "Error fetching details please review zyla's imei checker:",
      error
    );
    return 2;
  }
}

export async function getImeiDetailsKelpom(imei: string) {
  try {
    const response = await axios.get(
      `https://kelpom-imei-checker1.p.rapidapi.com/api?service=model&imei=${imei}`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-RapidAPI-Key":
          rapidApiKey,
        },
      }
    );

    if (response && response.data) {
      return response.data.model.device + " " + response.data.model.model_nb;
    }
  } catch (error) {
    console.error("Error fetching IMEI details from Kelpom:", error);
    return null;
  }
}

export async function searchTechspecsProduct(query: string) {
  const url = `https://api.techspecs.io/v4/product/search?query=${encodeURIComponent(
    query
  )}`;
  const headers = {
    Authorization:
    technoSpecKey,
  };

  try {
    const response = await axios.post(url, {}, { headers: headers });
    return response.data.data.items[0].product.id;
  } catch (error) {
    console.error("Error in Techspecs product search:", error);
    return null;
  }
}

export async function getProductDetails(productId: string) {
  try {
    const response = await axios.get(
      `https://api.techspecs.io/v4/product/detail?productId=${productId}`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization:
          technoSpecKey,
        },
      }
    );

    if (
      response &&
      response.data.data.items[0].key_aspects["wireless_&_cellular"].includes(
        "5G"
      )
    ) {
      //1 SUPPORTS 5G
      return true;
    }
    //0 DOESNT SUPPORT 5G
    return false;
  } catch (error) {
    console.error("Error fetching product details from Techspecs:", error);
    return false;
  }
}

export async function getGeneralImeiCoverage(imei: string) {
  try {
    const zylaResult = await getImeiDetailsZyla(imei);

    if (zylaResult === 1) {
      return true;
    } else if (zylaResult === 0) {
      return false;
    } else if (zylaResult === 2) {
      const kelpomResult = await getImeiDetailsKelpom(imei);

      if (kelpomResult) {
        const techspecsProductId = await searchTechspecsProduct(kelpomResult);

        if (techspecsProductId) {
          return await getProductDetails(techspecsProductId);
        } else {
          console.error("Failed to find product in Techspecs");
          return false;
        }
      } else {
        console.error("Failed to get details from Kelpom");
        return false;
      }
    }
  } catch (error) {
    console.error("An error has occurred in getGeneralImeiCoverage:", error);
    return false;
  }
  return false;
}
