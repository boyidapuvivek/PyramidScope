import { YStack, ScrollView } from "tamagui";
import TopHeader from "~/components/homescreen/TopHeader";
import CardBox from "~/components/homescreen/CardBox";
import ActiveInspection from "~/components/homescreen/ActiveInspection";
import { Colors } from "~/constants/colors";
import RecentReports from "~/components/homescreen/RecentReports";
import RecentViolation from "~/components/homescreen/RecentViolation";

const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <YStack flex={1} bg={Colors.background} pb={20}>
                <TopHeader />
                <CardBox />
                <ActiveInspection />
                <RecentReports />
                <RecentViolation />
            </YStack>
        </ScrollView>
    )
}

export default HomeScreen;