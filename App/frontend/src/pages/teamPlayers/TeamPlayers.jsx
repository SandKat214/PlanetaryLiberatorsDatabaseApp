import { VStack } from "@chakra-ui/react";
import TeamPlayersTable from "./sections/TeamPlayersTable";
import TeamPlayersController from "./sections/TeamPlayersController";

const TeamPlayers = () => {
  return (
    <VStack gap={20} alignItems="center" w="100%">
      <TeamPlayersController />
      <TeamPlayersTable />
    </VStack>
  );
};

export default TeamPlayers;
