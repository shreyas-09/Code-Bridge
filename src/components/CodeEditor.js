import { useRef, useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';
import ACTIONS, { CODE_CHANGE } from '../Actions';
import * as monaco from 'monaco-editor';

const CodeEditor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef();

  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('python');

  const [is_keyboard, setis_keyboard] = useState(true);

  useEffect(() => {
    if (socketRef.current && is_keyboard) {
      // console.log(value);
      socketRef.current.emit('badlav', value, roomId);
    }
    setis_keyboard(true);
  }, [value]);
  if (socketRef.current) {
    socketRef.current.on('recieved-badlav', (V) => {
      setis_keyboard(false);
      setValue(V);
      // console.log('woah');
    });
  }
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();

    // console.log(editorRef);
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  /*Needs to be done in the same way so as to change the language automatically*/
  useEffect(() => {
    console.log('WOWWWWWW');
  }, [language]);

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            // ref={editorRef}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
