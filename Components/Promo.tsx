/*
 *
 *<Flex justifyContent={'center'} height={'1000px'} alignItems={'center'} bg={'black'}>   
 *      <Promo isNotFullVisible width={['100%', '791px', '40%']} height={['100%', '591px', '40%'] }>
 *          <p>Title</p>
 *   
 *          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nam? Debitis non quo repellat ex praesentium omnis cumque ducimus corrupti nobis! Sunt provident animi beatae impedit fugiat itaque ea veniam.</p>
 *         <Button borderColor={'red'} bg={'white'} color={'black'} width={'90px'}>Button </Button>
 *    </Promo>
 * </Flex> 
 * 
 * 
*/


import {  Flex } from "@chakra-ui/react";
import { cornerRadiusDesktopAndTablet, cornerRadiusMobile, shadowEffectDesktop, shadowEffectMobile, shadowEffectTablet } from "@/styles/global-info.js";





export const Promo: 
React.FC<{ children: React.ReactNode, isNotFullVisible?: boolean, width: Array<string>, height: Array<string> }> = ({ 
  children,
  isNotFullVisible = false
 }) => {
  return (
      <Flex          
          textAlign="center" 
          direction="column" 
          justifyContent="space-evenly" 
          alignItems="center" 
          shadow={[shadowEffectDesktop, shadowEffectTablet, shadowEffectMobile]} 
          bg={isNotFullVisible ? ['rgba(255, 254, 254, 0.9)', 'rgba(255, 254, 254, 0.83)', 'rgba(255, 254, 254, 0.9)'] : 'white'} 
          padding={'20px'}
          min-width={'40%'}
          max-width={'60%'}
          borderRadius={[cornerRadiusDesktopAndTablet, cornerRadiusDesktopAndTablet, cornerRadiusMobile]}
      >
          {children}
      </Flex>

  );
};

