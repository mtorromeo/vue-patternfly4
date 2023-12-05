import e from"./html-Kvqpyljp.js";import n from"./xml-p7MaTYwx.js";import t from"./sql-I5mDR2-c.js";import a from"./css-cVFo_mI8.js";import r from"./c-s4so_vbd.js";import i from"./javascript-7J2veyI3.js";import s from"./shellscript-updAn_cf.js";import u from"./lua-lgd4ZtOl.js";import"./java-VegtbrWX.js";const c=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/textmate/ruby.tmbundle/blob/master/Syntaxes/Ruby.plist","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/textmate/ruby.tmbundle/commit/efcb8941c701343f1b2e9fb105c678152fea6892",name:"ruby",scopeName:"source.ruby",comment:`
	TODO: unresolved issues

	text:
	"p <<end
	print me!
	end"
	symptoms:
	not recognized as a heredoc
	solution:
	there is no way to distinguish perfectly between the << operator and the start
	of a heredoc. Currently, we require assignment to recognize a heredoc. More
	refinement is possible.
	• Heredocs with indented terminators (<<-) are always distinguishable, however.
	• Nested heredocs are not really supportable at present

	text:
	print <<-'THERE' 
	This is single quoted. 
	The above used #{Time.now} 
	THERE 
	symtoms:
	From Programming Ruby p306; should be a non-interpolated heredoc.
	
    text:
    val?(a):p(b)
    val?'a':'b'
    symptoms:
    ':p' is recognized as a symbol.. its 2 things ':' and 'p'.
    :'b' has same problem.
    solution:
    ternary operator rule, precedence stuff, symbol rule.
    but also consider 'a.b?(:c)' ??
`,patterns:[{captures:{1:{name:"keyword.control.class.ruby"},2:{name:"entity.name.type.class.ruby"},3:{name:"keyword.operator.other.ruby"},4:{name:"entity.other.inherited-class.ruby"},5:{name:"keyword.operator.other.ruby"},6:{name:"variable.other.object.ruby"}},match:"^\\s*(class)\\s+(?:([.a-zA-Z0-9_:]+)(?:\\s*(<)\\s*([.a-zA-Z0-9_:]+))?|(<<)\\s*([.a-zA-Z0-9_:]+))",name:"meta.class.ruby"},{captures:{1:{name:"keyword.control.module.ruby"},2:{name:"entity.name.type.module.ruby"},3:{name:"entity.other.inherited-class.module.first.ruby"},4:{name:"punctuation.separator.inheritance.ruby"},5:{name:"entity.other.inherited-class.module.second.ruby"},6:{name:"punctuation.separator.inheritance.ruby"},7:{name:"entity.other.inherited-class.module.third.ruby"},8:{name:"punctuation.separator.inheritance.ruby"}},match:"^\\s*(module)\\s+(([A-Z]\\w*(::))?([A-Z]\\w*(::))?([A-Z]\\w*(::))*[A-Z]\\w*)",name:"meta.module.ruby"},{comment:"else if is a common mistake carried over from other languages. it works if you put in a second end, but it’s never what you want.",match:"(?<!\\.)\\belse(\\s)+if\\b",name:"invalid.deprecated.ruby"},{captures:{1:{name:"punctuation.definition.constant.ruby"}},comment:"symbols as hash key (1.9 syntax)",match:"(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)",name:"constant.other.symbol.hashkey.ruby"},{captures:{1:{name:"punctuation.definition.constant.ruby"}},comment:"symbols as hash key (1.8 syntax)",match:"(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!])?)(?=\\s*=>)",name:"constant.other.symbol.hashkey.ruby"},{comment:"everything being a reserved word, not a value and needing a 'end' is a..",match:"(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\\b(?![?!])",name:"keyword.control.ruby"},{comment:"contextual smart pair support for block parameters",match:"(?<!\\.)\\bdo\\b",name:"keyword.control.start-block.ruby"},{comment:"contextual smart pair support",match:"(?<=\\{)(\\s+)",name:"meta.syntax.ruby.start-block"},{match:"(?<!\\.)\\b(alias|alias_method|block_given[?]|break|defined[?]|iterator[?]|next|redo|retry|return|super|undef|yield)(\\b|(?<=[?]))(?![?!])",name:"keyword.control.pseudo-method.ruby"},{match:"\\b(nil|true|false)\\b(?![?!])",name:"constant.language.ruby"},{match:"\\b(__(dir|FILE|LINE)__)\\b(?![?!])",name:"variable.language.ruby"},{begin:"^__END__\\n",captures:{0:{name:"string.unquoted.program-block.ruby"}},comment:"__END__ marker",contentName:"text.plain",end:"(?=not)impossible",patterns:[{begin:"(?=<?xml|<(?i:html\\b)|!DOCTYPE (?i:html\\b))",end:"(?=not)impossible",name:"text.html.embedded.ruby",patterns:[{include:"text.html.basic"}]}]},{match:"\\b(self)\\b(?![?!])",name:"variable.language.self.ruby"},{comment:" everything being a method but having a special function is a..",match:"\\b(initialize|new|loop|include|extend|prepend|fail|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|private_class_method|module_function|public|public_class_method|protected|refine|using)\\b(?![?!])",name:"keyword.other.special-method.ruby"},{begin:"\\b(?<!\\.|::)(require|require_relative)\\b",captures:{1:{name:"keyword.other.special-method.ruby"}},end:"$|(?=#|\\})",name:"meta.require.ruby",patterns:[{include:"$self"}]},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.instance.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(@@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.class.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(\\$)[a-zA-Z_]\\w*",name:"variable.other.readwrite.global.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(\\$)(!|@|&|`|'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|\"|-[0adFiIlpvw])",name:"variable.other.readwrite.global.pre-defined.ruby"},{begin:"\\b(ENV)\\[",beginCaptures:{1:{name:"variable.other.constant.ruby"}},end:"\\]",name:"meta.environment-variable.ruby",patterns:[{include:"$self"}]},{match:"\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))",name:"support.class.ruby"},{match:"\\b(abort|at_exit|autoload[?]?|binding|callcc|caller|caller_locations|chomp|chop|eval|exec|exit|exit!|fork|format|gets|global_variables|gsub|lambda|load|local_variables|open|p|print|printf|proc|putc|puts|rand|readline|readlines|select|set_trace_func|sleep|spawn|sprintf|srand|sub|syscall|system|test|trace_var|trap|untrace_var|warn)(\\b|(?<=[?!]))(?![?!])",name:"support.function.kernel.ruby"},{match:"\\b[A-Z]\\w*\\b",name:"variable.other.constant.ruby"},{begin:`(?x)
			         (?=def\\b)                                                      # an optimization to help Oniguruma fail fast
			         (?<=^|\\s)(def)\\s+                                              # the def keyword
			         ( (?>[a-zA-Z_]\\w*(?>\\.|::))?                                   # a method name prefix
			           (?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?                              # the method name
			           |===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) )  # …or an operator method
			         \\s*(\\()                                                        # the openning parenthesis for arguments
			        `,beginCaptures:{1:{name:"keyword.control.def.ruby"},2:{name:"entity.name.function.ruby"},3:{name:"punctuation.definition.parameters.ruby"}},comment:"the method pattern comes from the symbol pattern, see there for a explaination",end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.ruby"}},name:"meta.function.method.with-arguments.ruby",patterns:[{begin:"(?=[&*_a-zA-Z])",end:"(?=[,)])",patterns:[{captures:{1:{name:"storage.type.variable.ruby"},2:{name:"constant.other.symbol.hashkey.parameter.function.ruby"},3:{name:"punctuation.definition.constant.ruby"},4:{name:"variable.parameter.function.ruby"}},match:"\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))"},{include:"#parens"},{include:"#braces"},{include:"$self"}]}],repository:{braces:{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.function.begin.ruby"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.function.end.ruby"}},patterns:[{include:"#parens"},{include:"#braces"},{include:"$self"}]},parens:{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.function.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.ruby"}},patterns:[{include:"#parens"},{include:"#braces"},{include:"$self"}]}}},{begin:`(?x)
			         (?=def\\b)                                                      # an optimization to help Oniguruma fail fast
			         (?<=^|\\s)(def)\\s+                                              # the def keyword
			         ( (?>[a-zA-Z_]\\w*(?>\\.|::))?                                   # a method name prefix
			           (?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?                              # the method name
			           |===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) )  # …or an operator method
			         [ \\t]                                                          # the space separating the arguments
			         (?=[ \\t]*[^\\s#;])                                              # make sure arguments and not a comment follow
			        `,beginCaptures:{1:{name:"keyword.control.def.ruby"},2:{name:"entity.name.function.ruby"}},comment:"same as the previous rule, but without parentheses around the arguments",end:"$",name:"meta.function.method.with-arguments.ruby",patterns:[{begin:"(?![\\s,])",end:"(?=,|$)",patterns:[{captures:{1:{name:"storage.type.variable.ruby"},2:{name:"constant.other.symbol.hashkey.parameter.function.ruby"},3:{name:"punctuation.definition.constant.ruby"},4:{name:"variable.parameter.function.ruby"}},match:"\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))",name:"variable.parameter.function.ruby"},{include:"$self"}]}]},{captures:{1:{name:"keyword.control.def.ruby"},3:{name:"entity.name.function.ruby"}},comment:" the optional name is just to catch the def also without a method-name",match:`(?x)
			         (?=def\\b)                                                           # an optimization to help Oniguruma fail fast
			         (?<=^|\\s)(def)\\b                                                    # the def keyword
			         ( \\s+                                                               # an optional group of whitespace followed by…
			           ( (?>[a-zA-Z_]\\w*(?>\\.|::))?                                      # a method name prefix
			             (?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?                                 # the method name
			             |===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) ) )?  # …or an operator method
			        `,name:"meta.function.method.without-arguments.ruby"},{match:"\\b\\d(?>_?\\d)*(?=\\.\\d|[eE])(\\.\\d(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?r?i?\\b",name:"constant.numeric.float.ruby"},{match:"\\b(0|(0[dD]\\d|[1-9])(?>_?\\d)*)r?i?\\b",name:"constant.numeric.integer.ruby"},{match:"\\b0[xX]\\h(?>_?\\h)*r?i?\\b",name:"constant.numeric.hex.ruby"},{match:"\\b0[bB][01](?>_?[01])*r?i?\\b",name:"constant.numeric.binary.ruby"},{match:"\\b0([oO]?[0-7](?>_?[0-7])*)?r?i?\\b",name:"constant.numeric.octal.ruby"},{begin:":'",captures:{0:{name:"punctuation.definition.constant.ruby"}},end:"'",name:"constant.other.symbol.single-quoted.ruby",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.ruby"}]},{begin:':"',captures:{0:{name:"punctuation.definition.constant.ruby"}},end:'"',name:"constant.other.symbol.double-quoted.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{comment:"Needs higher precedence than regular expressions.",match:"(?<!\\()/=",name:"keyword.operator.assignment.augmented.ruby"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},comment:"single quoted string (does not allow interpolation)",end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.single.ruby",patterns:[{match:"\\\\'|\\\\\\\\",name:"constant.character.escape.ruby"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},comment:"double quoted string (allows for interpolation)",end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.double.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},comment:"execute string (allows for interpolation)",end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{include:"#percent_literals"},{begin:`(?x)
			   (?:
			     ^                      # beginning of line
			   | (?<=                   # or look-behind on:
			       [=>~(?:\\[,|&;]
			     | [\\s;]if\\s			# keywords
			     | [\\s;]elsif\\s
			     | [\\s;]while\\s
			     | [\\s;]unless\\s
			     | [\\s;]when\\s
			     | [\\s;]assert_match\\s
			     | [\\s;]or\\s			# boolean opperators
			     | [\\s;]and\\s
			     | [\\s;]not\\s
			     | [\\s.]index\\s			# methods
			     | [\\s.]scan\\s
			     | [\\s.]sub\\s
			     | [\\s.]sub!\\s
			     | [\\s.]gsub\\s
			     | [\\s.]gsub!\\s
			     | [\\s.]match\\s
			     )
			   | (?<=                  # or a look-behind with line anchor:
			        ^when\\s            # duplication necessary due to limits of regex
			      | ^if\\s
			      | ^elsif\\s
			      | ^while\\s
			      | ^unless\\s
			      )
			   )
			   \\s*((/))(?![*+{}?])
			`,captures:{1:{name:"string.regexp.classic.ruby"},2:{name:"punctuation.definition.string.ruby"}},comment:`regular expressions (normal)
			we only start a regexp if the character before it (excluding whitespace)
			is what we think is before a regexp
			`,contentName:"string.regexp.classic.ruby",end:"((/[eimnosux]*))",patterns:[{include:"#regex_sub"}]},{captures:{1:{name:"punctuation.definition.constant.ruby"}},comment:"symbols",match:"(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?|===?|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?|(@@?|\\$)[a-zA-Z_]\\w*)",name:"constant.other.symbol.ruby"},{begin:"^=begin",captures:{0:{name:"punctuation.definition.comment.ruby"}},comment:"multiline comments",end:"^=end",name:"comment.block.documentation.ruby"},{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.ruby"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.ruby"}},end:"\\n",name:"comment.line.number-sign.ruby"}]},{comment:`
			matches questionmark-letters.

			examples (1st alternation = hex):
			?\\x1     ?\\x61

			examples (2nd alternation = octal):
			?\\0      ?\\07     ?\\017

			examples (3rd alternation = escaped):
			?\\n      ?\\b

			examples (4th alternation = meta-ctrl):
			?\\C-a    ?\\M-a    ?\\C-\\M-\\C-\\M-a

			examples (4th alternation = normal):
			?a       ?A       ?0 
			?*       ?"       ?( 
			?.       ?#
			
			
			the negative lookbehind prevents against matching
			p(42.tainted?)
			`,match:"(?<!\\w)\\?(\\\\(x\\h{1,2}(?!\\h)\\b|0[0-7]{0,2}(?![0-7])\\b|[^x0MC])|(\\\\[MC]-)+\\w|[^\\s\\\\])",name:"constant.numeric.ruby"},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)HTML)\\b\\1))',comment:"Heredoc with embedded html",end:"(?!\\G)",name:"meta.embedded.block.html",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)HTML)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"text.html",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"text.html.basic"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)XML)\\b\\1))',comment:"Heredoc with embedded xml",end:"(?!\\G)",name:"meta.embedded.block.xml",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)XML)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"text.xml",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"text.xml"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)SQL)\\b\\1))',comment:"Heredoc with embedded sql",end:"(?!\\G)",name:"meta.embedded.block.sql",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)SQL)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.sql",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.sql"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)CSS)\\b\\1))',comment:"Heredoc with embedded css",end:"(?!\\G)",name:"meta.embedded.block.css",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)CSS)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.css",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.css"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)CPP)\\b\\1))',comment:"Heredoc with embedded c++",end:"(?!\\G)",name:"meta.embedded.block.c++",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)CPP)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.c++",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.c++"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)C)\\b\\1))',comment:"Heredoc with embedded c",end:"(?!\\G)",name:"meta.embedded.block.c",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)C)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.c",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.c"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1))',comment:"Heredoc with embedded javascript",end:"(?!\\G)",name:"meta.embedded.block.js",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.js",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.js"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)JQUERY)\\b\\1))',comment:"Heredoc with embedded jQuery javascript",end:"(?!\\G)",name:"meta.embedded.block.js.jquery",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)JQUERY)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.js.jquery",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.js.jquery"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1))',comment:"Heredoc with embedded shell",end:"(?!\\G)",name:"meta.embedded.block.shell",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.shell",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.shell"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)LUA)\\b\\1))',comment:"Heredoc with embedded lua",end:"(?!\\G)",name:"meta.embedded.block.lua",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)LUA)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.lua",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.lua"},{include:"#escaped_char"}]}]},{begin:'(?=(?><<[-~]("?)((?:[_\\w]+_|)RUBY)\\b\\1))',comment:"Heredoc with embedded ruby",end:"(?!\\G)",name:"meta.embedded.block.ruby",patterns:[{begin:'(?><<[-~]("?)((?:[_\\w]+_|)RUBY)\\b\\1)',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.ruby",end:"\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.ruby"},{include:"#escaped_char"}]}]},{begin:"(?>=\\s*<<(\\w+))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"^\\1$",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"(?><<[-~](\\w+))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},comment:"heredoc with indented terminator",end:"\\s*\\1$",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"(?<=\\{|do|\\{\\s|do\\s)(\\|)",captures:{1:{name:"punctuation.separator.arguments.ruby"}},end:"(?<!\\|)(\\|)(?!\\|)",patterns:[{include:"$self"},{match:"[_a-zA-Z][_a-zA-Z0-9]*",name:"variable.other.block.ruby"},{match:",",name:"punctuation.separator.variable.ruby"}]},{match:"=>",name:"punctuation.separator.key-value"},{match:"->",name:"support.function.kernel.lambda.ruby"},{match:"<<=|%=|&{1,2}=|\\*=|\\*\\*=|\\+=|-=|\\^=|\\|{1,2}=|<<",name:"keyword.operator.assignment.augmented.ruby"},{match:"<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?",name:"keyword.operator.comparison.ruby"},{match:"(?<!\\.)\\b(and|not|or)\\b(?![?!])",name:"keyword.operator.logical.ruby"},{comment:"Make sure this goes after assignment and comparison",match:"(?<=^|[ \\t])!|&&|\\|\\||\\^",name:"keyword.operator.logical.ruby"},{captures:{1:{name:"punctuation.separator.method.ruby"}},comment:"Safe navigation operator - Added in 2.3",match:"(&\\.)\\s*(?![A-Z])"},{match:"(%|&|\\*\\*|\\*|\\+|-|/)",name:"keyword.operator.arithmetic.ruby"},{match:"=",name:"keyword.operator.assignment.ruby"},{match:"\\||~|>>",name:"keyword.operator.other.ruby"},{match:";",name:"punctuation.separator.statement.ruby"},{match:",",name:"punctuation.separator.object.ruby"},{captures:{1:{name:"punctuation.separator.namespace.ruby"}},comment:"Mark as namespace separator if double colons followed by capital letter",match:"(::)\\s*(?=[A-Z])"},{captures:{1:{name:"punctuation.separator.method.ruby"}},comment:"Mark as method separator if double colons not followed by capital letter",match:"(\\.|::)\\s*(?![A-Z])"},{comment:"Must come after method and constant separators to prefer double colons",match:":",name:"punctuation.separator.other.ruby"},{match:"\\{",name:"punctuation.section.scope.begin.ruby"},{match:"\\}",name:"punctuation.section.scope.end.ruby"},{match:"\\[",name:"punctuation.section.array.begin.ruby"},{match:"\\]",name:"punctuation.section.array.end.ruby"},{match:"\\(|\\)",name:"punctuation.section.function.ruby"}],repository:{escaped_char:{match:"\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)",name:"constant.character.escape.ruby"},heredoc:{begin:"^<<[-~]?\\w+",end:"$",patterns:[{include:"$self"}]},interpolated_ruby:{patterns:[{begin:"#\\{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.ruby"}},contentName:"source.ruby",end:"(\\})",endCaptures:{0:{name:"punctuation.section.embedded.end.ruby"},1:{name:"source.ruby"}},name:"meta.embedded.line.ruby",patterns:[{include:"#nest_curly_and_self"},{include:"$self"}],repository:{nest_curly_and_self:{patterns:[{begin:"\\{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"\\}",patterns:[{include:"#nest_curly_and_self"}]},{include:"$self"}]}}},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.instance.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.class.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#\\$)[a-zA-Z_]\\w*",name:"variable.other.readwrite.global.ruby"}]},percent_literals:{patterns:[{begin:"%i(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"meta.array.symbol.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"},{include:"#symbol"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"},{include:"#symbol"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"},{include:"#symbol"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"},{include:"#symbol"}]},{include:"#symbol"}],repository:{angles:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\<|\\\\>",name:"constant.other.symbol.ruby"},{begin:"<",captures:{0:{name:"constant.other.symbol.ruby"}},end:">",patterns:[{include:"#angles"},{include:"#symbol"}]}]},braces:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\{|\\\\\\}",name:"constant.other.symbol.ruby"},{begin:"\\{",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\}",patterns:[{include:"#braces"},{include:"#symbol"}]}]},brackets:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\[|\\\\\\]",name:"constant.other.symbol.ruby"},{begin:"\\[",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\]",patterns:[{include:"#brackets"},{include:"#symbol"}]}]},parens:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\(|\\\\\\)",name:"constant.other.symbol.ruby"},{begin:"\\(",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\)",patterns:[{include:"#parens"},{include:"#symbol"}]}]},symbol:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\\\|\\\\[ ]",name:"constant.other.symbol.ruby"},{match:"\\S\\w*",name:"constant.other.symbol.ruby"}]}}},{begin:"%I(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"meta.array.symbol.interpolated.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"},{include:"#symbol"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"},{include:"#symbol"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"},{include:"#symbol"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"},{include:"#symbol"}]},{include:"#symbol"}],repository:{angles:{patterns:[{begin:"<",captures:{0:{name:"constant.other.symbol.ruby"}},end:">",patterns:[{include:"#angles"},{include:"#symbol"}]}]},braces:{patterns:[{begin:"\\{",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\}",patterns:[{include:"#braces"},{include:"#symbol"}]}]},brackets:{patterns:[{begin:"\\[",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\]",patterns:[{include:"#brackets"},{include:"#symbol"}]}]},parens:{patterns:[{begin:"\\(",captures:{0:{name:"constant.other.symbol.ruby"}},end:"\\)",patterns:[{include:"#parens"},{include:"#symbol"}]}]},symbol:{patterns:[{begin:"(?=\\\\|#\\{)",end:"(?!\\G)",name:"constant.other.symbol.ruby",patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"}]},{match:"\\S\\w*",name:"constant.other.symbol.ruby"}]}}},{begin:"%q(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"}]}],repository:{angles:{patterns:[{match:"\\\\<|\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"<",end:">",patterns:[{include:"#angles"}]}]},braces:{patterns:[{match:"\\\\\\{|\\\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\{",end:"\\}",patterns:[{include:"#braces"}]}]},brackets:{patterns:[{match:"\\\\\\[|\\\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\[",end:"\\]",patterns:[{include:"#brackets"}]}]},parens:{patterns:[{match:"\\\\\\(|\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\(",end:"\\)",patterns:[{include:"#parens"}]}]}}},{begin:"%Q?(?:([(\\[{<])|([^\\w\\s=]|_))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"}]},{include:"#escaped_char"},{include:"#interpolated_ruby"}],repository:{angles:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"<",end:">",patterns:[{include:"#angles"}]}]},braces:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\{",end:"\\}",patterns:[{include:"#braces"}]}]},brackets:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\[",end:"\\]",patterns:[{include:"#brackets"}]}]},parens:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\(",end:"\\)",patterns:[{include:"#parens"}]}]}}},{begin:"%r(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"([)\\]}>]\\2|\\1\\2)[eimnosux]*",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.regexp.percent.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"}]},{include:"#regex_sub"}],repository:{angles:{patterns:[{include:"#regex_sub"},{begin:"<",end:">",patterns:[{include:"#angles"}]}]},braces:{patterns:[{include:"#regex_sub"},{begin:"\\{",end:"\\}",patterns:[{include:"#braces"}]}]},brackets:{patterns:[{include:"#regex_sub"},{begin:"\\[",end:"\\]",patterns:[{include:"#brackets"}]}]},parens:{patterns:[{include:"#regex_sub"},{begin:"\\(",end:"\\)",patterns:[{include:"#parens"}]}]}}},{begin:"%s(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.definition.constant.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.definition.constant.end.ruby"}},name:"constant.other.symbol.percent.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"}]}],repository:{angles:{patterns:[{match:"\\\\<|\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"<",end:">",patterns:[{include:"#angles"}]}]},braces:{patterns:[{match:"\\\\\\{|\\\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\{",end:"\\}",patterns:[{include:"#braces"}]}]},brackets:{patterns:[{match:"\\\\\\[|\\\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\[",end:"\\]",patterns:[{include:"#brackets"}]}]},parens:{patterns:[{match:"\\\\\\(|\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{begin:"\\(",end:"\\)",patterns:[{include:"#parens"}]}]}}},{begin:"%w(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"meta.array.string.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"},{include:"#string"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"},{include:"#string"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"},{include:"#string"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"},{include:"#string"}]},{include:"#string"}],repository:{angles:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\<|\\\\>",name:"string.other.ruby"},{begin:"<",captures:{0:{name:"string.other.ruby"}},end:">",patterns:[{include:"#angles"},{include:"#string"}]}]},braces:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\{|\\\\\\}",name:"string.other.ruby"},{begin:"\\{",captures:{0:{name:"string.other.ruby"}},end:"\\}",patterns:[{include:"#braces"},{include:"#string"}]}]},brackets:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\[|\\\\\\]",name:"string.other.ruby"},{begin:"\\[",captures:{0:{name:"string.other.ruby"}},end:"\\]",patterns:[{include:"#brackets"},{include:"#string"}]}]},parens:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\(|\\\\\\)",name:"string.other.ruby"},{begin:"\\(",captures:{0:{name:"string.other.ruby"}},end:"\\)",patterns:[{include:"#parens"},{include:"#string"}]}]},string:{patterns:[{captures:{0:{name:"constant.character.escape.ruby"}},match:"\\\\\\\\|\\\\[ ]",name:"string.other.ruby"},{match:"\\S\\w*",name:"string.other.ruby"}]}}},{begin:"%W(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"meta.array.string.interpolated.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"},{include:"#string"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"},{include:"#string"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"},{include:"#string"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"},{include:"#string"}]},{include:"#string"}],repository:{angles:{patterns:[{begin:"<",captures:{0:{name:"string.other.ruby"}},end:">",patterns:[{include:"#angles"},{include:"#string"}]}]},braces:{patterns:[{begin:"\\{",captures:{0:{name:"string.other.ruby"}},end:"\\}",patterns:[{include:"#braces"},{include:"#string"}]}]},brackets:{patterns:[{begin:"\\[",captures:{0:{name:"string.other.ruby"}},end:"\\]",patterns:[{include:"#brackets"},{include:"#string"}]}]},parens:{patterns:[{begin:"\\(",captures:{0:{name:"string.other.ruby"}},end:"\\)",patterns:[{include:"#parens"},{include:"#string"}]}]},string:{patterns:[{begin:"(?=\\\\|#\\{)",end:"(?!\\G)",name:"string.other.ruby",patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"}]},{match:"\\S\\w*",name:"string.other.ruby"}]}}},{begin:"%x(?:([(\\[{<])|([^\\w\\s]|_))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"[)\\]}>]\\2|\\1\\2",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.interpolated.percent.ruby",patterns:[{begin:"\\G(?<=\\()(?!\\))",end:"(?=\\))",patterns:[{include:"#parens"}]},{begin:"\\G(?<=\\[)(?!\\])",end:"(?=\\])",patterns:[{include:"#brackets"}]},{begin:"\\G(?<=\\{)(?!\\})",end:"(?=\\})",patterns:[{include:"#braces"}]},{begin:"\\G(?<=<)(?!>)",end:"(?=>)",patterns:[{include:"#angles"}]},{include:"#escaped_char"},{include:"#interpolated_ruby"}],repository:{angles:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"<",end:">",patterns:[{include:"#angles"}]}]},braces:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\{",end:"\\}",patterns:[{include:"#braces"}]}]},brackets:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\[",end:"\\]",patterns:[{include:"#brackets"}]}]},parens:{patterns:[{include:"#escaped_char"},{include:"#interpolated_ruby"},{begin:"\\(",end:"\\)",patterns:[{include:"#parens"}]}]}}}]},regex_sub:{patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{captures:{1:{name:"punctuation.definition.quantifier.begin.ruby"},3:{name:"punctuation.definition.quantifier.end.ruby"}},match:"(\\{)\\d+(,\\d+)?(\\})",name:"keyword.operator.quantifier.ruby"},{begin:"\\[\\^?",beginCaptures:{0:{name:"punctuation.definition.character-class.begin.ruby"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.character-class.end.ruby"}},name:"constant.other.character-class.set.ruby",patterns:[{include:"#escaped_char"}]},{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.definition.comment.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.comment.end.ruby"}},name:"comment.line.number-sign.ruby",patterns:[{include:"#escaped_char"}]},{begin:"\\(",captures:{0:{name:"punctuation.definition.group.ruby"}},end:"\\)",name:"meta.group.regexp.ruby",patterns:[{include:"#regex_sub"}]},{begin:"(?<=^|\\s)(#)\\s(?=[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$)",beginCaptures:{1:{name:"punctuation.definition.comment.ruby"}},comment:"We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags.",end:"$\\n?",name:"comment.line.number-sign.ruby"}]}},displayName:"Ruby",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]});var f=[...e,...n,...t,...a,...r,...i,...s,...u,c];export{f as default};
