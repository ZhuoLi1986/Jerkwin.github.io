var httpLanguages,contentType,options;!function(){var a,b=/\blang(?:uage)?-(?!\*)(\w+)\b/i,c=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var b,d,e=c.util.type(a);switch(e){case"Object":b={};for(d in a)a.hasOwnProperty(d)&&(b[d]=c.util.clone(a[d]));return b;case"Array":return a.slice()}return a}},languages:{extend:function(a,b){var d,e=c.util.clone(c.languages[a]);for(d in b)e[d]=b[d];return e},insertBefore:function(a,b,d,e){var f,g,h,i;e=e||c.languages,f=e[a],g={};for(h in f)if(f.hasOwnProperty(h)){if(h==b)for(i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,b){for(var d in a)b.call(a,d,a[d]),"Object"===c.util.type(a)&&c.languages.DFS(a[d],b)}},highlightAll:function(a,b){var d,e,f=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(e=0;d=f[e++];)c.highlightElement(d,a===!0,b)},highlightElement:function(a,e,f){for(var g,h,i,j,k,l=a;l&&!b.test(l.className);)l=l.parentNode;l&&(g=(l.className.match(b)||[,""])[1],h=c.languages[g]),h&&(a.className=a.className.replace(b,"").replace(/\s+/g," ")+" language-"+g,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(b,"").replace(/\s+/g," ")+" language-"+g),i=a.textContent,i&&(i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," "),j={element:a,language:g,grammar:h,code:i},c.hooks.run("before-highlight",j),e&&self.Worker?(k=new Worker(c.filename),k.onmessage=function(a){j.highlightedCode=d.stringify(JSON.parse(a.data),g),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,f&&f.call(j.element),c.hooks.run("after-highlight",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code}))):(j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,f&&f.call(a),c.hooks.run("after-highlight",j))))},highlight:function(a,b,e){return d.stringify(c.tokenize(a,b),e)},tokenize:function(a,b){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=c.Token,t=[a],u=b.rest;if(u){for(d in u)b[d]=u[d];delete b.rest}a:for(d in b)if(b.hasOwnProperty(d)&&b[d])for(e=b[d],f=e.inside,g=!!e.lookbehind,h=0,e=e.pattern||e,i=0;i<t.length;i++){if(j=t[i],t.length>a.length)break a;j instanceof s||(e.lastIndex=0,k=e.exec(j),k&&(g&&(h=k[1].length),l=k.index-1+h,k=k[0].slice(h),m=k.length,n=l+m,o=j.slice(0,l+1),p=j.slice(n+1),q=[i,1],o&&q.push(o),r=new s(d,f?c.tokenize(k,f):k),q.push(r),p&&q.push(p),Array.prototype.splice.apply(t,q)))}return t},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d,e,f=c.hooks.all[a];if(f&&f.length)for(e=0;d=f[e++];)d(b)}}},d=c.Token=function(a,b){this.type=a,this.content=b};return d.stringify=function(a,b,e){var f,g,h;if("string"==typeof a)return a;if("[object Array]"==Object.prototype.toString.call(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e},"comment"==f.type&&(f.attributes["spellcheck"]="true"),c.hooks.run("wrap",f),g="";for(h in f.attributes)g+=h+'="'+(f.attributes[h]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+g+">"+f.content+"</"+f.tag+">"},self.document?(a=document.getElementsByTagName("script"),a=a[a.length-1],a&&(c.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",c.highlightAll)),void 0):(self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code;self.postMessage(JSON.stringify(c.tokenize(e,c.languages[d]))),self.close()},!1),void 0)}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes["title"]=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,"pseudo-class":/:[-\w]+(?:\(.*\))?/g,"class":/\.[-:\.\w]+/g,id:/#[-:\.\w]+/g}},Prism.languages.insertBefore("css","ignore",{hexcode:/#[\da-f]{3,6}/gi,entity:/\\[\da-f]{1,8}/gi,number:/[\d%\.]+/g,"function":/(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/gi}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,operator:{pattern:/([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,lookbehind:!0}}),Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/gi,constant:/\b[A-Z0-9_]{2,}\b/g}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|&lt;\?php|&lt;\?)/gi,variable:/(\$\w+)\b/gi,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/g,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/g,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(a){"php"===a.language&&(a.tokenStack=[],a.code=a.code.replace(/(?:&lt;\?php|&lt;\?|<\?php|<\?)[\w\W]*?(?:\?&gt;|\?>)/gi,function(b){return a.tokenStack.push(b),"{{{PHP"+a.tokenStack.length+"}}}"}))}),Prism.hooks.add("after-highlight",function(a){if("php"===a.language){for(var b,c=0;b=a.tokenStack[c];c++)a.highlightedCode=a.highlightedCode.replace("{{{PHP"+(c+1)+"}}}",Prism.highlight(b,a.grammar,"php"));a.element.innerHTML=a.highlightedCode}}),Prism.hooks.add("wrap",function(a){"php"===a.language&&"markup"===a.type&&(a.content=a.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/(&lt;|<)[^?]\/?(.*?)(>|&gt;)/g,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/g})),Prism.languages.insertBefore("php","variable",{"this":/\$this/g,global:/\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,scope:{pattern:/\b[\w\\]+::/g,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}}),Prism.languages.coffeescript=Prism.languages.extend("javascript",{"block-comment":/([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g,keyword:/\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g}),Prism.languages.insertBefore("coffeescript","keyword",{"function":{pattern:/[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,inside:{"function-name":/[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g}},"attr-name":/[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g}),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g}),Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/g,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/g,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g}),Prism.languages.c=Prism.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,operator:/[-+]{1,2}|!=?|&lt;{1,2}=?|&gt;{1,2}=?|\-&gt;|={1,2}|\^|~|%|(&amp;){1,2}|\|?\||\?|\*|\//g}),Prism.languages.insertBefore("c","keyword",{property:{pattern:/#[a-zA-Z]+\ .*/g,inside:{property:/&lt;[a-zA-Z.]+>/g}}}),Prism.languages.cpp=Prism.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/g,operator:/[-+]{1,2}|!=?|&lt;{1,2}=?|&gt;{1,2}=?|\-&gt;|:{1,2}|={1,2}|\^|~|%|(&amp;){1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/g}),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,"boolean":/\b(True|False)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.sql={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)).*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMPORARY|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,"boolean":/\b(TRUE|FALSE|NULL)\b/gi,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/\b(ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|=?&lt;|=?&gt;|={1}|(&amp;){1,2}|\|?\||\?|\*|\//gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[;[\]()`,.]/g},Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g,string:/("""|''')[\W\w]*?\1|("|'|\/)[\W\w]*?\2/g,number:/\b0b[01_]+\b|\b0x[\da-f_]+(\.[\da-f_p\-]+)?\b|\b[\d_]+(\.[\d_]+[e]?[\d]*)?[glidf]\b|[\d_]+(\.[\d_]+)?\b/gi,operator:/={0,2}~|\?\.|\*?\.@|\.&amp;|\.(?=\w)|\.{2}(&lt;)?(?=\w)|-&gt;|\?:|[-+]{1,2}|!|&lt;=&gt;|(&gt;){1,3}|(&lt;){1,2}|={1,2}|(&amp;){1,2}|\|{1,2}|\?|\*{1,2}|\/|\^|%/g,punctuation:/\.+|[{}[\];(),:$]/g,annotation:/@\w+/}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(setup|given|when|then|and|cleanup|expect|where):/g}),Prism.hooks.add("wrap",function(a){if("groovy"===a.language&&"string"===a.type){var b=a.content[0];"'"!=b&&(a.content=Prism.highlight(a.content,{expression:{pattern:/([^\\])(\$(\{.*?\}|[\w\.]*))/,lookbehind:!0,inside:Prism.languages.groovy}}),a.classes.push("/"===b?"regex":"gstring"))}}),Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,inside:{property:/^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/g,"attr-name":/:\w+/g}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/g,inside:{property:/[0-9]+[A-Z\s-]+$/g}},keyword:/^[\w-]+:(?=.+)/gm},httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(contentType in httpLanguages)httpLanguages[contentType]&&(options={},options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)\\n\\n[\\w\\W]*","gi"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","keyword",options));Prism.languages.ruby=Prism.languages.extend("clike",{comment:/#[^\r\n]*(\r?\n|$)/g,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g}),Prism.languages.insertBefore("ruby","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0},variable:/[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,symbol:/:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g}),Prism.languages.fortran=Prism.languages.extend("clike",{comment:/![^\r\n]*(\r?\n|$)/g,keyword:/\b(abs|achar|acos|adjustl|allocatable|allocate|asin|atan|atan2|backspace|blockdata|break|call|case|character|char|close|common|complex|continue|cosh|cos|cycle|dble|data|deallocate|dot_product|do|else|end|End|enddo|exit|exp|external|file|formatted|format|function|Function|getarg|goto|iand|ichar|if|imod|implicit|include|index|inot|integer|int|ior|iostat|len_trim|len|log10|logical|log|malloc|matmul|max|min|module|mod|not|open|parameter|pause|position|print|Program|read|real|Real|return|rewind|save|select|sign|sin|size|sqrt|status|stop|Subroutine|system|tanh|tan|then|transpose|trim|unformatted|unit|use|wait|where|while|write)\b/g,builtin:/\b(Array|TrueClass)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([EeDd]-?\d+)?)\b/g}),Prism.languages.insertBefore("fortran","keyword",{variable:/[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,symbol:/:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g}),Prism.languages.gherkin={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|((#)|(\/\/)).*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,atrule:/\b(And|Given|When|Then|In order to|As an|I want to|As a)\b/g,keyword:/\b(Scenario Outline|Scenario|Feature|Background|Story)\b/g},Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/g,string:/@?("|')(\\?.)*?\1/g,preprocessor:/^\s*#.*/gm,number:/\b-?(0x)?\d*\.?\d+\b/g}),Prism.languages.go=Prism.languages.extend("clike",{keyword:/\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/g,builtin:/\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/g,"boolean":/\b(_|iota|nil|true|false)\b/g,operator:/([(){}\[\]]|[*\/%^!]=?|\+[=+]?|-[>=-]?|\|[=|]?|>[=>]?|&lt;(&lt;|[=-])?|==?|&amp;(&amp;|=|^=?)?|\.(\.\.)?|[,;]|:=?)/g,number:/\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/gi,string:/("|'|`)(\\?.|\r|\n)*?\1/g}),delete Prism.languages.go["class-name"],function(){function a(a,b){return Array.prototype.slice.call((b||document).querySelectorAll(a))}function b(a,b){return b=" "+b+" ",(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(b)>-1}function c(a,c,d){var e,f,g,h,i,j=c.replace(/\s+/g,"").split(","),k=+a.getAttribute("data-line-offset")||0,l=parseFloat(getComputedStyle(a).lineHeight);for(f=0;e=j[f++];)e=e.split("-"),g=+e[0],h=+e[1]||g,i=document.createElement("div"),i.textContent=Array(h-g+2).join(" \r\n"),i.className=(d||"")+" line-highlight",b(a,"line-numbers")||(i.setAttribute("data-start",g),h>g&&i.setAttribute("data-end",h)),i.style.top=(g-k-1)*l+"px",b(a,"line-numbers")?a.appendChild(i):(a.querySelector("code")||a).appendChild(i)}function d(){var b,d,e,f=location.hash.slice(1);a(".temporary.line-highlight").forEach(function(a){a.parentNode.removeChild(a)}),b=(f.match(/\.([\d,-]+)$/)||[,""])[1],b&&!document.getElementById(f)&&(d=f.slice(0,f.lastIndexOf(".")),e=document.getElementById(d),e&&(e.hasAttribute("data-line")||e.setAttribute("data-line",""),c(e,b,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView()))}if(window.Prism){crlf=/\r?\n|\r/g;var e=0;Prism.hooks.add("after-highlight",function(b){var f=b.element.parentNode,g=f&&f.getAttribute("data-line");f&&g&&/pre/i.test(f.nodeName)&&(clearTimeout(e),a(".line-highlight",f).forEach(function(a){a.parentNode.removeChild(a)}),c(f,g),e=setTimeout(d,1))}),addEventListener("hashchange",d)}}(),Prism.hooks.add("after-highlight",function(a){var b,c,d=a.element.parentNode;d&&/pre/i.test(d.nodeName)&&-1!==d.className.indexOf("line-numbers")&&(b=1+a.code.split("\n").length,lines=new Array(b),lines=lines.join("<span></span>"),c=document.createElement("span"),c.className="line-numbers-rows",c.innerHTML=lines,d.hasAttribute("data-start")&&(d.style.counterReset="linenumber "+(parseInt(d.getAttribute("data-start"),10)-1)),a.element.appendChild(c))}),function(){var a,b;if(window.Prism)for(a in Prism.languages)b=Prism.languages[a],b.tab=/\t/g,b.lf=/\n/g,b.cr=/\r/g}(),function(){var a,b,c,d,e,f;if(self.Prism){a=/\b([a-z]{3,7}:\/\/|tel:)[\w-+%~/.:]+/,b=/\b\S+@[\w.]+[a-z]{2}/,c=/\[([^\]]+)]\(([^)]+)\)/,d=["comment","url","attr-value","string"];for(e in Prism.languages)f=Prism.languages[e],Prism.languages.DFS(f,function(e,f){d.indexOf(e)>-1&&(f.pattern||(f=this[e]={pattern:f}),f.inside=f.inside||{},"comment"==e&&(f.inside["md-link"]=c),f.inside["url-link"]=a,f.inside["email-link"]=b)}),f["url-link"]=a,f["email-link"]=b;Prism.hooks.add("wrap",function(a){var b,d;/-link$/.test(a.type)&&(a.tag="a",b=a.content,"email-link"==a.type?b="mailto:"+b:"md-link"==a.type&&(d=a.content.match(c),b=d[2],a.content=d[1]),a.attributes.href=b)})}}(),function(){function a(a){var c,d,e=a.toLowerCase();return b.HTML[e]?"html":b.SVG[a]?"svg":b.MathML[a]?"mathml":0!==b.HTML[e]&&(c=(document.createElement(a).toString().match(/\[object HTML(.+)Element\]/)||[])[1],c&&"Unknown"!=c)?(b.HTML[e]=1,"html"):(b.HTML[e]=0,0!==b.SVG[a]&&(d=(document.createElementNS("http://www.w3.org/2000/svg",a).toString().match(/\[object SVG(.+)Element\]/)||[])[1],d&&"Unknown"!=d)?(b.SVG[a]=1,"svg"):(b.SVG[a]=0,0!==b.MathML[a]&&0===a.indexOf("m")?(b.MathML[a]=1,"mathml"):(b.MathML[a]=0,null)))}var b,c;self.Prism&&(Prism.languages.css&&(Prism.languages.css.atrule.inside["atrule-id"]=/^@[\w-]+/,Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-class":/:[\w-]+/,"pseudo-element":/::[\w-]+/}}),Prism.languages.markup&&(Prism.languages.markup.tag.inside.tag.inside["tag-id"]=/[\w-]+/,b={HTML:{a:1,abbr:1,acronym:1,b:1,basefont:1,bdo:1,big:1,blink:1,cite:1,code:1,dfn:1,em:1,kbd:1,i:1,rp:1,rt:1,ruby:1,s:1,samp:1,small:1,spacer:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1,wbr:1,noframes:1,summary:1,command:1,dt:1,dd:1,figure:1,figcaption:1,center:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,address:1,noscript:1,isIndex:1,main:1,mark:1,marquee:1,meter:1,menu:1},SVG:{animateColor:1,animateMotion:1,animateTransform:1,glyph:1,feBlend:1,feColorMatrix:1,feComponentTransfer:1,feFuncR:1,feFuncG:1,feFuncB:1,feFuncA:1,feComposite:1,feConvolveMatrix:1,feDiffuseLighting:1,feDisplacementMap:1,feFlood:1,feGaussianBlur:1,feImage:1,feMerge:1,feMergeNode:1,feMorphology:1,feOffset:1,feSpecularLighting:1,feTile:1,feTurbulence:1,feDistantLight:1,fePointLight:1,feSpotLight:1,linearGradient:1,radialGradient:1,altGlyph:1,textPath:1,tref:1,altglyph:1,textpath:1,tref:1,altglyphdef:1,altglyphitem:1,clipPath:1,"color-profile":1,cursor:1,"font-face":1,"font-face-format":1,"font-face-name":1,"font-face-src":1,"font-face-uri":1,foreignObject:1,glyph:1,glyphRef:1,hkern:1,vkern:1},MathML:{}}),Prism.hooks.add("wrap",function(b){var d,e;(["tag-id"].indexOf(b.type)>-1||"property"==b.type&&0!=b.content.indexOf("-")||"atrule-id"==b.type&&0!=b.content.indexOf("@-")||"pseudo-class"==b.type&&0!=b.content.indexOf(":-")||"pseudo-element"==b.type&&0!=b.content.indexOf("::-")||"attr-name"==b.type&&0!=b.content.indexOf("data-"))&&-1===b.content.indexOf("<")&&(d="w/index.php?fulltext&search=",b.tag="a",e="http://docs.webplatform.org/","css"==b.language?(e+="wiki/css/","property"==b.type?e+="properties/":"atrule-id"==b.type?e+="atrules/":"pseudo-class"==b.type?e+="selectors/pseudo-classes/":"pseudo-element"==b.type&&(e+="selectors/pseudo-elements/")):"markup"==b.language&&("tag-id"==b.type?(c=a(b.content)||c,e+=c?"wiki/"+c+"/elements/":d):"attr-name"==b.type&&(e+=c?"wiki/"+c+"/attributes/":d)),e+=b.content,b.attributes.href=e,b.attributes.target="_blank")}))}(),function(){if(self.Prism&&self.document&&document.querySelector){var a={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(b){var c,d=b.getAttribute("data-src"),e=(d.match(/\.(\w+)$/)||[,""])[1],f=a[e]||e,g=document.createElement("code");g.className="language-"+f,b.textContent="",g.textContent="Loading¡­",b.appendChild(g),c=new XMLHttpRequest,c.open("GET",d,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(g.textContent=c.responseText,Prism.highlightElement(g)):g.textContent=c.status>=400?"? Error "+c.status+" while fetching file: "+c.statusText:"? Error: File does not exist or is empty")},c.send(null)})}}();
function box(){var b,c,d,e,f,g,h,i,a=C$("div");for(a.id="Bkg",b=C$("div"),b.id="Box",c=C$("img"),c="<img id='TopImg'>",d=C$("i"),d="<i id='TopTxt'></i>",e=C$("a"),e="<a id='Prev' href='javascript:Page(-1)'>&#9668;&#9668;</a>",f=C$("a"),f="<a id='Next' href='javascript:Page(1)'>&#9658;&#9658;</a>",g=0,window.innerHeight?g=window.innerHeight:document.body&&document.body.clientHeight&&(g=document.body.clientHeight),b.innerHTML=d+e+c+f,document.body.insertBefore(a,document.body.firstChild),document.body.insertBefore(b,document.body.firstChild),h=document.getElementsByTagName("img"),i=0;i<h.length;i++)ImgSrc[i]=h[i].src,ImgAlt[i]=h[i].alt,h[i].addEventListener("click",function(){var a,b,c;for(a=1;a<ImgSrc.length;a++)if(ImgSrc[a]==this.src){ImgIdx=a;break}b=document.body.scrollTop||document.documentElement.scrollTop,c="block","TopImg"==this.id&&(c="none"),$("TopImg").src=this.src,$("TopImg").style.height=g-90+"px",$("Bkg").style.display=c,$("Bkg").style.top=b+"px",$("Box").style.display=c,$("Box").style.top=b+"px",Page(0)},!1)}function Page(a){var b=ImgSrc.length-1;ImgIdx+=a,1>ImgIdx&&(ImgIdx=b),ImgIdx>b&&(ImgIdx=1),$("TopImg").src=ImgSrc[ImgIdx],$("Prev").innerHTML=ImgIdx+"/"+b+"&#9668;&#9668;",$("Next").innerHTML="&#9658;&#9658;"+ImgIdx+"/"+b}function flc(){var b,a=document.getElementsByName("flc");for(b=0;b<=a.length;b++)flowchart.parse(a[b].value).drawSVG("fig-"+a[b].id,{x:30,y:50,"line-width":3,"line-length":50,"text-margin":10,"font-size":14,font:"normal","font-family":"Helvetica","font-weight":"normal","font-color":"black","line-color":"black","element-color":"black",fill:"white","yes-text":"yes","no-text":"no","arrow-end":"block",symbols:{start:{"font-color":"red","element-color":"green",fill:"yellow"},end:{"class":"end-element"}},flowstate:{past:{fill:"#CCCCCC","font-size":12},current:{fill:"yellow","font-color":"red","font-weight":"bold"},future:{fill:"#FFFF99"},request:{fill:"blue"},invalid:{fill:"#444444"},approved:{fill:"#58C4A3","font-size":12,"yes-text":"APPROVED","no-text":"n/a"},rejected:{fill:"#C45879","font-size":12,"yes-text":"n/a","no-text":"REJECTED"}}})}var ImgIdx=0,ImgSrc=new Array,$=function(a){return document.getElementById(a)},C$=function(a){return document.createElement(a)};window.onload=function(){box(),flc()};