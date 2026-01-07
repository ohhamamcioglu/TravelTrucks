import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/campersSlice";
import { setLocation, setType, toggleFeature } from "../redux/filters/filtersSlice";
import {
  selectLocation,
  selectType,
  selectFeatures,
  selectPage,
  selectLimit,
  selectCampers,
  selectCampersLoading,
  selectCampersError,
} from "../redux/selector";

import acIcon from "../components/Icon/Icons/ac.svg";
import automaticIcon from "../components/Icon/Icons/automatic.svg";
import kitchenIcon from "../components/Icon/Icons/kitchen.svg";
import tvIcon from "../components/Icon/Icons/tv.svg";
import bathroomIcon from "../components/Icon/Icons/bathroom.svg";
import vanIcon from "../components/Icon/Icons/van.svg";
import fullyIntegratedIcon from "../components/Icon/Icons/fullyIntegrated.svg";
import alcoveIcon from "../components/Icon/Icons/alcove.svg";

function Catalog() {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const type = useSelector(selectType);
  const features = useSelector(selectFeatures);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  const params = useMemo(() => {
    const nextParams = { page, limit };
    if (location) nextParams.location = location;
    if (type) nextParams.form = type;

    features.forEach((feature) => {
      if (feature === "transmission") {
        nextParams.transmission = "automatic";
        return;
      }
      nextParams[feature] = true;
    });

    return nextParams;
  }, [location, type, features, page, limit]);

  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch, params]);

  return (
    <section className="p-8">
      <h1 className="heading-2 mb-6">Catalog</h1>

      <label className="block mb-6">
        <span className="block mb-2">Location</span>
        <input
          type="text"
          value={location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
          className="border p-2 w-60"
        />
      </label>

      <h2 className="font-semibold mb-3">Vehicle equipment</h2>
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button
          type="button"
          onClick={() => dispatch(toggleFeature("AC"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            features.includes("AC") ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={acIcon} alt="AC" className="w-6 h-6" />
          <span className="text-sm">AC</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(toggleFeature("transmission"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            features.includes("transmission") ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={automaticIcon} alt="Automatic" className="w-6 h-6" />
          <span className="text-sm">Automatic</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(toggleFeature("kitchen"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            features.includes("kitchen") ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={kitchenIcon} alt="Kitchen" className="w-6 h-6" />
          <span className="text-sm">Kitchen</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(toggleFeature("TV"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            features.includes("TV") ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={tvIcon} alt="TV" className="w-6 h-6" />
          <span className="text-sm">TV</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(toggleFeature("bathroom"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            features.includes("bathroom") ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={bathroomIcon} alt="Bathroom" className="w-6 h-6" />
          <span className="text-sm">Bathroom</span>
        </button>
      </div>

      <h2 className="font-semibold mb-3">Vehicle type</h2>
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button
          type="button"
          onClick={() => dispatch(setType("panelTruck"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            type === "panelTruck" ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={vanIcon} alt="Van" className="w-6 h-6" />
          <span className="text-sm">Van</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(setType("fullyIntegrated"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            type === "fullyIntegrated" ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={fullyIntegratedIcon} alt="Fully Integrated" className="w-6 h-6" />
          <span className="text-sm text-center">Fully Integrated</span>
        </button>

        <button
          type="button"
          onClick={() => dispatch(setType("alcove"))}
          className={`w-[112px] h-[96px] border rounded-lg flex flex-col items-center justify-center gap-2 ${
            type === "alcove" ? "border-buttonHover" : "border-gray-300"
          }`}
        >
          <img src={alcoveIcon} alt="Alcove" className="w-6 h-6" />
          <span className="text-sm">Alcove</span>
        </button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul className="mt-6 space-y-2">
        {campers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Catalog;
