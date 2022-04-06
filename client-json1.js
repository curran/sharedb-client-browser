import ShareDBClient from 'sharedb/lib/client';
import json1 from 'ot-json1';
import textUnicode from 'ot-text-unicode';

// We don't set the default type as json1
// because it triggers some buggy behavior
// that is designed for json0.
// See https://github.com/share/sharedb/blob/master/lib/client/doc.js#L621

ShareDBClient.types.register(json1.type);
ShareDBClient.types.register(textUnicode.type);

export default ShareDBClient;