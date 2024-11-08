import { Grid, Image, GridItem } from "@chakra-ui/react";
// import oo from
export const Contact = () => {
  return (
    <Grid
    width="100%"
    height="89vh" // or any height you want
    templateColumns="repeat(3, 1fr)"
    templateRows="1fr"
    position="relative"
    backgroundImage="url('/images/group_people.png')" // Set as background
    backgroundSize="cover"  
    >
  
    {/* Second Image: Positioned in the first row, second column */}
    <GridItem colStart={2} colEnd={3} rowStart={1} zIndex={2}>
      <Image src="/images/arabic.jpeg" alt="Location" />
    </GridItem>
  </Grid>
  
  );
};
