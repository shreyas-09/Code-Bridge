import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../constants';
import React, { useState } from 'react';

import '../App.css';
// const languages = Object.entries(LANGUAGE_VERSIONS);
// const ACTIVE_COLOR = 'blue.400';

const LanguageSelector = ({ language, onSelect }) => {
  // const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in the selection
  const handleChange = (event) => {
    // setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    // <Box ml={2} mb={4}>
    //   <Text mb={2} fontSize="lg">
    //     Language:
    //   </Text>
    //   <Menu isLazy>
    //     <MenuButton as={Button}>{language}</MenuButton>
    //     <MenuList bg="#110c1b">
    //       {languages.map(([lang, version]) => (
    //         <MenuItem
    //           key={lang}
    //           color={lang === language ? ACTIVE_COLOR : ''}
    //           bg={lang === language ? 'gray.900' : 'transparent'}
    //           _hover={{
    //             color: ACTIVE_COLOR,
    //             bg: 'gray.900',
    //           }}
    //           onClick={() => onSelect(lang)}
    //         >
    //           {lang}
    //           &nbsp;
    //           <Text as="span" color="gray.600" fontSize="sm">
    //             ({version})
    //           </Text>
    //         </MenuItem>
    //       ))}
    //     </MenuList>
    //   </Menu>
    // </Box>

    <>
      <div className="select-container">
        <select
          className="select-menu"
          value={language}
          onChange={handleChange}
        >
          <option value="javascript">Javascript</option>
          <option value="python">Python 3.0</option>
          <option value="cpp">C++ 20</option>
        </select>
      </div>
    </>
  );
};
export default LanguageSelector;
