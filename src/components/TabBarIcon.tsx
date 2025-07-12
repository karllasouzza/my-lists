import { Ionicons } from "@expo/vector-icons";

type IconName = keyof typeof Ionicons.glyphMap;

type Props = {
  color: string;
  name: IconName;
  className?: string;
};

const TabBarIcon = ({ color, name, className }: Props) => {
  return <Ionicons name={name} color={color} className={className} />;
};

export default TabBarIcon;
