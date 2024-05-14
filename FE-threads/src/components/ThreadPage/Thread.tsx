import {
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import ThreadBase from "@/features/threads/components/ThreadBase";

import { useState, useEffect } from "react";
import { API } from "@/config/api";
import { ThreadType } from "@/types/ThreadType";

function ThreadComponent() {

  const [data, setData] = useState<ThreadType[]>();
  useEffect(() => {
      const fetchData = async () => {
          const response = await API.get("/threads");
          console.log("dataas", response.data.data);
          
          setData(response.data.data);
      };
      fetchData();
  }, []);
  console.log("ok",data);
  
  return (
      <Flex gap={3} >
          <Box >
              <Stack mt={8}>
                  {
                    data &&  data.map((e) => (
                          <ThreadBase
                              key={e.id}
                              id={e.id}
                              content={e.content}
                              image={e.image}
                              user={e.user}
                              replies={e.replies}
                              likes={e.likes}
                              createdAt={e.createdAt}
                          />
                      ))
                  }
              </Stack>
          </Box>
      </Flex>
  );
}

export default ThreadComponent;
