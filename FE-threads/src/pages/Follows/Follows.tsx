import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Following from "@/features/follow/components/Following";
import Followers from "@/features/follow/components/Followers";

export default function Follow() {

  return (

      <>
          <Box>
              <Tabs
              >
                  <TabList>
                      <Tab color={"blue"}>Following</Tab>
                      <Tab color={"blue"}>Follower</Tab>
                  </TabList>

                  <TabPanels>
                      <TabPanel>
                          <Following />
                      </TabPanel>
                      <TabPanel>
                          <Followers />
                      </TabPanel>
                  </TabPanels>
              </Tabs>
          </Box>
      </>
  );
}