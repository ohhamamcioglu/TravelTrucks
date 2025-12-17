import Ac from "./Icons/ac.svg?react";
import Alcove from "./Icons/alcove.svg?react";
import Automatic from "./Icons/automatic.svg?react";
import Bathroom from "./Icons/bathroom.svg?react";
import Fridge from "./Icons/fridge.svg?react";
import FullyIntegrated from "./Icons/fullyIntegrated.svg?react";
import Gas from "./Icons/gas.svg?react";
import Heart from "./Icons/heart.svg?react";
import Kitchen from "./Icons/kitchen.svg?react";
import Microwave from "./Icons/microwave.svg?react";
import Petrol from "./Icons/petrol.svg?react";
import Radio from "./Icons/radio.svg?react";
import Stars from "./Icons/stars.svg?react";
import Tv from "./Icons/tv.svg?react";
import Van from "./Icons/van.svg?react";
import Water from "./Icons/water.svg?react";

const ICONS = {
  ac: Ac,
  alcove: Alcove,
  automatic: Automatic,
  bathroom: Bathroom,
  fridge: Fridge,
  fullyIntegrated: FullyIntegrated,
  gas: Gas,
  heart: Heart,
  kitchen: Kitchen,
  microwave: Microwave,
  petrol: Petrol,
  radio: Radio,
  stars: Stars,
  tv: Tv,
  van: Van,
  water: Water,
};

export default function Icon({ name, size = 24, className = "" }) {
  const SvgIcon = ICONS[name];
  if (!SvgIcon) return null;

  return (
    <SvgIcon
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
