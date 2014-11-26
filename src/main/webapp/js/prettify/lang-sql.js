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
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xa0]+/,null,"\t\n\r �\xa0"],["str",/^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,null,"\"'"]],[["com",/^(?:--[^\n\r]*|\/\*[\S\s]*?(?:\*\/|$))/],["kwd",/^(?:add|all|alter|and|any|as|asc|authorization|backup|begin|between|break|browse|bulk|by|cascade|case|check|checkpoint|close|clustered|coalesce|collate|column|commit|compute|constraint|contains|containstable|continue|convert|create|cross|current|current_date|current_time|current_timestamp|current_user|cursor|database|dbcc|deallocate|declare|default|delete|deny|desc|disk|distinct|distributed|double|drop|dummy|dump|else|end|errlvl|escape|except|exec|execute|exists|exit|fetch|file|fillfactor|for|foreign|freetext|freetexttable|from|full|function|goto|grant|group|having|holdlock|identity|identitycol|identity_insert|if|in|index|inner|insert|intersect|into|is|join|key|kill|left|like|lineno|load|match|merge|national|nocheck|nonclustered|not|null|nullif|of|off|offsets|on|open|opendatasource|openquery|openrowset|openxml|option|or|order|outer|over|percent|plan|precision|primary|print|proc|procedure|public|raiserror|read|readtext|reconfigure|references|replication|restore|restrict|return|revoke|right|rollback|rowcount|rowguidcol|rule|save|schema|select|session_user|set|setuser|shutdown|some|statistics|system_user|table|textsize|then|to|top|tran|transaction|trigger|truncate|tsequal|union|unique|update|updatetext|use|user|using|values|varying|view|waitfor|when|where|while|with|writetext)(?=[^\w-]|$)/i,
null],["lit",/^[+-]?(?:0x[\da-f]+|(?:\.\d+|\d+(?:\.\d*)?)(?:e[+-]?\d+)?)/i],["pln",/^[_a-z][\w-]*/i],["pun",/^[^\w\t\n\r "'\xa0][^\w\t\n\r "'+\xa0-]*/]]),["sql"]);
