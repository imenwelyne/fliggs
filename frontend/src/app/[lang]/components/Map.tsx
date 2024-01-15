"use client";
import { setCookie } from 'cookies-next';
import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/map.module.css";
import {
  getModelsByBrand,
  getBrands,
  getDeviceDetails,
  getGeneralImeiCoverage, 
} from "../services/coverageMapApis";
import Coverage from "./Coverage";

interface MapInt {
  data: {
    location: string;
  };
}

export default function Map({ data }: MapInt) {
  // console.log('feeen',data.location);

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(8.224471999999992);
  const [lat, setLat] = useState(46.8155135);
  const [zoom, setZoom] = useState(9);
  const [imei, setImei] = useState("");

  const [fiveGSupport, setFiveGSupport] = useState(false);
  const [showCoverage, setShowCoverage] = useState(false);

  const [brands, setBrands] = useState<Array<{ name: string; id: string }>>([]);
  const [models, setModels] = useState<Array<{ name: string; id: string }>>([]);
  const [selectedModelId, setSelectedModelId] = useState("");

  // State variables to track the user's selection
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      const brandsData = await getBrands();
      setBrands(brandsData);
    };

    fetchBrands();
  }, []);

  const handleBrandChange = async (brandId: string) => {
    setFiveGSupport(false);
    setShowCoverage(false);
    setCookie('is5G', 'false');

    setSelectedBrand(brandId);
    const modelsByBrand = await getModelsByBrand(brandId);
    setModels(modelsByBrand);
  };

  const handleModelChange = (modelId: string) => {
    setImei("");
    setFiveGSupport(false);
    setShowCoverage(false);
    setSelectedModelId(modelId);
    setSelectedModel(models.find((model) => model.id === modelId)?.name || "");
    setCookie('is5G', 'false');
    console.log(modelId);
  };

  async function handleSubmit() {
    setFiveGSupport(false);
    setShowCoverage(false);
    setCookie('is5G', 'false');
    if (!imei) {
      if (selectedModelId) {
        const is5GSupported = await getDeviceDetails(selectedModelId);
        setFiveGSupport(is5GSupported);
        setCookie('is5G', 'true');
        setShowCoverage(true);
      } else {
        console.log("Model is not selected");
      }
    } else {
      console.log("Using IMEI not device pick");
      //IMEI FUNCTIONS THEN SETFIVEGSUPPORT
      const isImei5GSupported = await getGeneralImeiCoverage(imei);
      setFiveGSupport(isImei5GSupported);
      setShowCoverage(true);
      setCookie('is5G', 'true');
    }
  }

  

  useEffect(() => {
    console.log("Updated fiveGSupport:", fiveGSupport);
  }, [fiveGSupport]);

  return (
    <section className={styles.container}>
      <h1 className={`font-bold leading-none ${styles.title}`}>
        Check Your Coverage
      </h1>
      <form className={styles.form}>
        <div className="flex flex-col">
          <h3 className={`${styles.label}`}>Select Your Address</h3>
          <div className="flex flex-row" style={{ gap: "40px" }}>
            <input
              type="text"
              name="address"
              placeholder={"Address"}
              // onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-5 bg-blackish-gray text-white  mb-3"
            />
            <input
              type="text"
              name="zipCode"
              placeholder={"ZIP code"}
              // onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-5 bg-blackish-gray text-white  mb-3"
              required
            />
          </div>
          <h3 className={`mt-5 ${styles.label}`}>Select Your Device</h3>
          <div className="flex flex-row" style={{ gap: "40px" }}>
            <select
              name="brand"
              value={selectedBrand}
              onChange={(e) => handleBrandChange(e.target.value)}
              className="w-full p-5 bg-blackish-gray text-white  mb-3"
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {brands.map((brand, index) => (
                <option key={index} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>

            <select
              name="model"
              value={selectedModelId}
              onChange={(e) => handleModelChange(e.target.value)}
              className="w-full p-5 bg-blackish-gray text-white  mb-3"
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {models.map((model, index) => (
                <option key={index} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>

          <h3 className={`mt-5 ${styles.label}`}>Or</h3>

          <input
            type="text"
            name="code"
            value={imei}
            placeholder={"IMEI code (*#06# to extract) "}
            onChange={(e) => setImei(e.target.value)}
            className="w-full p-5 bg-blackish-gray text-white  mb-3 mt-2"
          />
                    <h5 className={`mt-5 ${styles.label}`}>* If you can't find your phone in the list, use IMEI.</h5>

        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="btn_submit p-5 custom-font-book font-spacing button-bg-yellow text-gray-900 uppercase mt-12"
            onClick={handleSubmit}
          >
            CONTINUE
          </button>
        </div>
      </form>
      {showCoverage &&
        (fiveGSupport ? (
          <div>
          <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg mb-12">
            Device is 5G covered
          </p>
          </div>
        ) : (
          <p className="text-orange-700 bg-orange-300 px-4 py-2 rounded-lg mb-12">
            Device is not 5G covered
          </p>
        ))}

      
    </section>
  );
}
