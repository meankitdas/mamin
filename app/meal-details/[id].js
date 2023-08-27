import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import useFetch from "../../hook/useFetch";

import { Meal, ScreenHeaderBtn, ItemTabs, ItemFooter } from "../../components";

import { COLORS, SIZES, icons } from "../../constants";

const tabs = ["Description", "Reviews", "Similar Items"];

const Itemdetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error, refetch } = useFetch(`meals/${params.id}`);

  // const isLoading = false;
  // const error = false;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.cart} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Meal
                itemLogo={data.item_image}
                title={data.item_name}
                cookName={data.item_cook}
                rating={data.item_rating}
              />

              <ItemTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* {displayTabContent()} */}
            </View>
          )}
        </ScrollView>
        <ItemFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
};

export default Itemdetails;

// : data.length === 0 ? (
//   <Text>No data available</Text>
// )
