/*
 * #%L
 * WebMotion wiki
 * $Id:$
 * $HeadURL:$
 * %%
 * Copyright (C) 2011 - 2014 Debux
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as 
 * published by the Free Software Foundation, either version 3 of the 
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Lesser Public License for more details.
 * 
 * You should have received a copy of the GNU General Lesser Public 
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/lgpl-3.0.html>.
 * #L%
 */
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xa0]+/,null,"\t\n\r �\xa0"],["com",/^#(?:if[\t\n\r \xa0]+(?:[$_a-z][\w']*|``[^\t\n\r`]*(?:``|$))|else|endif|light)/i,null,"#"],["str",/^(?:"(?:[^"\\]|\\[\S\s])*(?:"|$)|'(?:[^'\\]|\\[\S\s])(?:'|$))/,null,"\"'"]],[["com",/^(?:\/\/[^\n\r]*|\(\*[\S\s]*?\*\))/],["kwd",/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
["lit",/^[+-]?(?:0x[\da-f]+|(?:\.\d+|\d+(?:\.\d*)?)(?:e[+-]?\d+)?)/i],["pln",/^(?:[_a-z][\w']*[!#?]?|``[^\t\n\r`]*(?:``|$))/i],["pun",/^[^\w\t\n\r "'\xa0]+/]]),["fs","ml"]);
