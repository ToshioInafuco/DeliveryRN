import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/src/utils/data/products";
import formatCurrency from "@/src/utils/functions/format-currency";
import { Button } from "@/src/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/src/components/link-button";
import { useCartStore } from "@/src/stores/cart-store";

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();
  console.log(id);

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddToCart() {
    cartStore.add(product);
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 text-base font-body leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"}
            {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>

        <LinkButton href={"/"} title={"Voltar ao cardápio"} />
      </View>
    </View>
  );
}
