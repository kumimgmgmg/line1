$(function() {
	var formcount = 4;
	var availableTags = ['中央新幹線', '東海道新幹線', '山陽新幹線', '東北新幹線', '上越新幹線', '上越新幹線(ガーラ湯沢支線)', '山形新幹線', '秋田新幹線',
		'北陸新幹線', '九州新幹線', '北海道新幹線', 'JR函館本線(函館～長万部)', 'JR函館本線(長万部～小樽)', 'JR函館本線(小樽～旭川)', 'JR室蘭本線(長万部・室蘭～苫小牧)',
		'JR室蘭本線(苫小牧～岩見沢)', 'JR根室本線(滝川～新得)', 'JR根室本線(新得～釧路)', '花咲線', 'JR千歳線', 'JR石勝線', 'JR日高本線', 'JR札沼線', 'JR留萌本線',
		'JR富良野線', 'JR宗谷本線', 'JR石北本線', 'JR釧網本線', 'JR海峡線', 'JR江差線', 'JR東北本線(八戸～青森)', 'JR奥羽本線(新庄～青森)',
		'JR東北本線(黒磯～利府・盛岡)', 'はまなすベイライン大湊線', 'JR五能線', 'JR津軽線', 'JR八戸線', 'JR岩泉線', 'ドラゴンレール大船渡線',
		'銀河ドリームライン釜石線', 'JR北上線', 'JR田沢湖線', '十和田八幡平四季彩ライン', 'JR山田線', 'JR羽越本線', 'JR男鹿線', '山形線', 'JR仙山線',
		'フルーツライン左沢線', 'JR米坂線', '奥の細道最上川ライン', '奥の細道湯けむりライン', 'JR仙石線', 'JR石巻線', 'JR気仙沼線', 'JR磐越西線(郡山～会津若松)',
		'森と水とロマンの鉄道', 'JR只見線', 'ゆうゆうあぶくまライン', 'JR常磐線(取手～いわき)', 'JR常磐線(いわき～仙台)', 'JR東海道本線(東京～熱海)', 'JR山手線',
		'JR南武線', 'JR鶴見線', 'JR武蔵野線', 'JR横浜線', 'JR根岸線', 'JR横須賀線', 'JR相模線', 'JR中央本線(東京～塩尻)', 'JR中央線(快速)', 'JR中央・総武線',
		'JR総武本線', 'JR青梅線', 'JR五日市線', 'JR八高線(八王子～高麗川)', 'JR八高線(高麗川～高崎)', '宇都宮線', 'JR常磐線(上野～取手)', 'JR埼京線', 'JR川越線',
		'JR高崎線', 'JR外房線', 'JR内房線', 'JR京葉線', 'JR成田線', 'JR成田エクスプレス', 'JR鹿島線', 'JR久留里線', 'JR東金線', 'JR京浜東北線', 'JR湘南新宿ライン',
		'上野東京ライン', 'JR烏山線', 'JR吾妻線', 'JR信越本線', 'JR水郡線', 'JR水戸線', 'JR日光線', 'JR両毛線', 'JR上越線', '八ヶ岳高原線', 'JR身延線',
		'JR信越本線(篠ノ井～長野)', 'JR信越本線(直江津～新潟)', 'JR北陸本線(富山～直江津)', 'JR白新線', 'JR飯山線', 'JR越後線', '北アルプス線', 'JR弥彦線',
		'JR中央本線(名古屋～塩尻)', 'JR篠ノ井線', 'JR飯田線(豊橋～天竜峡)', 'JR飯田線(天竜峡～辰野)', 'JR北陸本線(米原～金沢)', 'JR高山本線', 'JR城端線',
		'JR氷見線', 'JR七尾線', '敦賀港線', '九頭竜線', 'JR小浜線', 'JR東海道本線(熱海～浜松)', 'JR東海道本線(浜松～岐阜)', 'JR東海道本線(岐阜～美濃赤坂・米原)',
		'JR伊東線', 'JR御殿場線', 'JR武豊線', 'JR太多線', 'JR関西本線(名古屋～亀山)', 'JR関西本線(亀山～加茂)', 'JR紀勢本線', 'JR草津線', 'JR参宮線', 'JR名松線',
		'琵琶湖線', '京都線', 'JR神戸線(大阪～神戸)', 'JR湖西線', '大和路線', 'JR神戸線(神戸～姫路)', 'JR山陽本線(姫路～岡山)', 'JR山陽本線(岡山～三原)',
		'JR山陽本線(三原～岩国)', 'JR山陽本線(岩国～門司)', 'JR山陽本線(兵庫～和田岬)', '嵯峨野線', 'JR山陰本線(園部～豊岡)', 'JR山陰本線(豊岡～米子)', '学研都市線',
		'奈良線', 'JR舞鶴線', '大阪環状線', 'JRゆめ咲線', 'JR東西線', '阪和線(天王寺～和歌山)', '羽衣線', 'JR関西空港線', 'JR宝塚線', '福知山線(篠山口～福知山)',
		'JR赤穂線', 'JR加古川線', 'JR姫新線(姫路～佐用)', 'JR姫新線(佐用～新見)', 'JR播但線', 'JR和歌山線', '万葉まほろば線', 'きのくに線', '紀勢本線(和歌山～和歌山市)',
		'おおさか東線', 'JR山陰本線(米子～益田)', 'JR山陰本線(益田～下関)', 'JR伯備線', 'JR因美線', 'JR境線', 'JR木次線', 'JR三江線', 'JR山口線', 'JR宇野線',
		'瀬戸大橋線', 'JR吉備線', 'JR芸備線', 'JR津山線', 'JR呉線', 'JR可部線', 'JR福塩線', 'JR宇部線', 'JR美祢線', 'JR小野田線', 'JR岩徳線', 'JR土讃線',
		'JR高徳線', 'よしの川ブルーライン', 'JR牟岐線', 'JR鳴門線', 'JR予讃線', 'JR予讃・内子線', 'しまんとグリーンライン', 'JR博多南線', 'JR鹿児島本線(下関・門司港～博多)',
		'JR鹿児島本線(博多～八代)', 'JR鹿児島本線(川内～鹿児島)', 'JR長崎本線(鳥栖～長崎)', 'JR日豊本線(門司港～佐伯)', 'JR日豊本線(佐伯～鹿児島中央)', '福北ゆたか線',
		'JR筑肥線(姪浜～西唐津)', '若松線', '福北ゆたか線(折尾～桂川)', '原田線', 'ゆふ高原線', 'JR日田彦山線', 'JR後藤寺線', '海の中道線', 'JR香椎線(香椎～宇美)',
		'JR佐世保線', 'JR筑肥線(西唐津～伊万里)', 'JR唐津線', 'JR大村線', '阿蘇高原線', 'JR三角線', 'えびの高原線(八代～吉松)', 'JR肥薩線(吉松～隼人)', 'JR宮崎空港線',
		'JR日南線', 'えびの高原線', 'JR指宿枕崎線', '東武東上線', '東武伊勢崎線', '東武日光線', '東武野田線', '東武亀戸線', '東武大師線', '東武越生線', '東武宇都宮線',
		'東武鬼怒川線', '東武佐野線', '東武桐生線', '東武小泉線', '西武池袋線', '西武秩父線', '西武有楽町線', '西武豊島線', '西武狭山線', 'レオライナー', '西武新宿線',
		'西武拝島線', '西武西武園線', '西武国分寺線', '西武多摩湖線', '西武多摩川線', '京成本線', '京成押上線', '京成金町線', '京成千葉線', '京成千原線', '成田スカイアクセス',
		'京王線', '京王相模原線', '京王高尾線', '京王競馬場線', '京王動物園線', '京王井の頭線', '京王新線', '小田急線', '小田急江ノ島線', '小田急多摩線', '東急東横線',
		'東急目黒線', '東急田園都市線', '東急大井町線', '東急池上線', '東急多摩川線', '東急世田谷線', '東急こどもの国線', '京急本線', '京急空港線', '京急大師線', '京急逗子線',
		'京急久里浜線', '東京メトロ銀座線', '東京メトロ丸ノ内線', '東京メトロ日比谷線', '東京メトロ東西線', '東京メトロ千代田線', '東京メトロ有楽町線', '東京メトロ有楽町新線',
		'東京メトロ半蔵門線', '東京メトロ南北線', '東京メトロ副都心線', '相鉄本線', '相鉄いずみ野線', '名鉄名古屋本線', '名鉄豊川線', '名鉄西尾線', '名鉄蒲郡線', '名鉄三河線',
		'名鉄豊田線', '名鉄空港線', '名鉄常滑線', '名鉄河和線', '名鉄知多新線', '名鉄築港線', '名鉄瀬戸線', '名鉄津島線', '名鉄尾西線', '名鉄犬山線', '名鉄各務原線',
		'名鉄広見線', '名鉄小牧線', '犬山モノレール', '名鉄竹鼻線', '名鉄羽島線', '近鉄難波線', '近鉄橿原線', '近鉄南大阪線', '近鉄養老線', '近鉄大阪線', '近鉄伊賀線',
		'近鉄吉野線', '近鉄湯の山線', '近鉄山田線', '近鉄鳥羽線', '近鉄天理線', '近鉄道明寺線', '内部線', '八王子線', '近鉄志摩線', '近鉄生駒線', '近鉄田原本線', '近鉄御所線',
		'近鉄鈴鹿線', '近鉄奈良線', '近鉄信貴線', '近鉄長野線', '近鉄けいはんな線', '西信貴ケーブル', '近鉄京都線', '生駒ケーブル', '近鉄名古屋線', '南海本線', '南海空港線',
		'南海和歌山港線', '南海高師浜線', '南海加太線', '南海多奈川線', '南海高野線', '南海高野山ケーブル', '南海汐見橋線', '京阪本線', '京阪宇治線', '京阪交野線', '京阪鴨東線',
		'男山ケーブル', '京阪石山坂本線', '京阪京津線', '京阪中之島線', '阪急神戸本線', '阪急宝塚本線', '阪急京都本線', '阪急今津線', '阪急甲陽線', '阪急伊丹線', '阪急箕面線',
		'阪急千里線', '阪急嵐山線', '阪神本線', '阪神なんば線', '阪神武庫川線', '西鉄天神大牟田線', '西鉄太宰府線', '西鉄甘木線', '西鉄貝塚線', '札幌市営地下鉄東西線', '札幌市営地下鉄南北線',
		'札幌市営地下鉄東豊線', '札幌市電山鼻線', '函館市電２系統', '函館市電５系統', 'ふるさと銀河線', '道南いさりび鉄道線', '津軽鉄道線', '弘南鉄道弘南線', '弘南鉄道大鰐線',
		'十和田観光電鉄', 'いわて銀河鉄道線', '青い森鉄道線', '三陸鉄道北リアス線', '三陸鉄道南リアス線', '秋田内陸線', '鳥海山ろく線', 'フラワー長井線', 'くりはら田園鉄道線',
		'阿武隈急行線', '仙台市営地下鉄南北線', '仙台市営地下鉄東西線', '福島交通飯坂線', '会津鉄道会津線', '仙台空港線', '都営大江戸線', '都営浅草線', '都営三田線', '都営新宿線',
		'都電荒川線', '日暮里・舎人ライナー', '秩父鉄道秩父本線', '埼玉高速鉄道線', 'いすみ線', 'つくばエクスプレス', 'みなとみらい線', 'ゆりかもめ', 'わたらせ渓谷線', 'ユーカリが丘線',
		'伊豆箱根鉄道大雄山線', 'ひたちなか海浜鉄道湊線', 'ブルーライン', 'グリーンライン', '金沢シーサイドライン', '関東鉄道常総線', '関東鉄道竜ヶ崎線', '江ノ島電鉄線', 'ニューシャトル',
		'鹿島鉄道線', '鹿島臨海鉄道大洗鹿島線', '芝山鉄道線', '小湊鉄道線', '湘南モノレール', '上信電鉄', '上毛電気鉄道上毛線', '新京成線', '真岡鐵道真岡線', '千葉都市モノレール１号線',
		'千葉都市モノレール２号線', '流鉄流山線', '多摩モノレール', '銚子電鉄線', '東京モノレール', 'りんかい線', '東葉高速線', '箱根登山鉄道鉄道線', '北総鉄道北総線',
		'ほっとスパ・ライン', '箱根登山ケーブルカー', '富士急行線', '北越急行ほくほく線', 'しなの鉄道線', '北しなの線', '上田電鉄別所線', '長野電鉄長野線', '長野電鉄屋代線',
		'上高地線', '富山地鉄本線', '富山地鉄立山線', '富山地鉄不二越・上滝線', '神岡鉄道神岡線', '黒部峡谷鉄道本線', '富山地鉄市内線【１・２系統】', '富山地鉄富山都心線【３系統(環状線)】',
		'万葉線', '富山ライトレール', '北陸鉄道石川線', '北陸鉄道浅野川線', '日本海ひすいライン', '妙高はねうまライン', 'あいの風とやま鉄道線', 'IRいしかわ鉄道線', 'のと鉄道七尾線',
		'えちぜん鉄道勝山永平寺線', 'えちぜん鉄道三国芦原線', '福井鉄道福武線', '伊豆急行線', '伊豆箱根鉄道駿豆線', '岳南鉄道線', '静岡鉄道静岡清水線', '天竜浜名湖線', '遠州鉄道鉄道線',
		'大井川鐵道大井川本線', '南アルプスあぷとライン', 'あおなみ線', '東海交通事業城北線', '愛知環状鉄道線', 'リニモ', '名古屋市営地下鉄東山線', '名古屋市営地下鉄名城線',
		'名古屋市営地下鉄名港線', '名古屋市営地下鉄鶴舞線', '名古屋市営地下鉄桜通線', '名古屋市営地下鉄上飯田線', 'ピーチライナー', '豊橋鉄道渥美線', '豊橋鉄道東田本線',
		'豊橋鉄道運動公園前線', 'ゆとりーとライン', '明知鉄道明知線', '長良川鉄道越美南線', '樽見鉄道樽見線', '三岐鉄道三岐線', '三岐鉄道北勢線', '伊勢鉄道伊勢線',
		'伊賀鉄道伊賀線', '養老鉄道養老線', '近江鉄道本線', '近江鉄道多賀線', '近江鉄道八日市線', '信楽高原鐵道信楽線', '嵯峨野観光線', '叡山電鉄叡山本線', '叡山電鉄鞍馬線',
		'宮福線', '宮豊線', '宮舞線', '京都市営地下鉄烏丸線', '京都市営地下鉄東西線', '京福電鉄嵐山本線', '京福電鉄北野線', '北大阪急行電鉄', '泉北高速鉄道線', '水間鉄道水間線',
		'大阪市営地下鉄御堂筋線', '大阪市営地下鉄谷町線', '大阪市営地下鉄四つ橋線', '大阪市営地下鉄中央線', '大阪市営地下鉄千日前線', '大阪市営地下鉄堺筋線', '大阪市営地下鉄長堀鶴見緑地線',
		'大阪市営地下鉄今里筋線', 'ニュートラム', '大阪モノレール線', '大阪モノレール彩都線', '阪堺電軌上町線', '阪堺電軌阪堺線', '神戸高速東西線', '神戸高速南北線', '有馬線',
		'三田線', '公園都市線', '粟生線', '北神急行北神線', '山陽電鉄本線', '山陽電鉄網干線', '能勢電鉄妙見線', '能勢電鉄日生線', '三木鉄道三木線', '北条鉄道北条線', '智頭急行智頭線',
		'神戸市営地下鉄西神線', '神戸市営地下鉄山手線', '夢かもめ', 'ポートライナー', '六甲ライナー', '紀州鉄道線', '貴志川線', '若桜線', '北松江線', '大社線', '水島本線',
		'井原線', '東山線', '清輝橋線', 'スカイレールみどり坂線', 'アストラムライン', '広電１号線(宇品線)', '広電２号線(宮島線)', '広電３号線', '広電５号線(皆実線)', '広電６号線(江波線)',
		'広電７号線', '広電８号線(横川線)', '広電９号線(白島線)', '錦川清流線', '阿波室戸シーサイドライン', '琴電琴平線', '琴電長尾線', '琴電志度線', '伊予鉄道郡中線', '伊予鉄道高浜線',
		'伊予鉄道横河原線', '伊予鉄道環状線', '伊予鉄道環状線', '伊予鉄道市駅線', '伊予鉄道松山駅前線', '伊予鉄道本町線', '中村線', '宿毛線', 'ごめん・なはり線', 'ごめん線', '伊野線', '桟橋線',
		'甘木鉄道', '伊田線', '糸田線', '田川線', '門司港レトロ観光線', '福岡市営地下鉄空港線', '福岡市営地下鉄箱崎線', '福岡市営地下鉄七隈線', '北九州モノレール', '筑豊電気鉄道線', '西九州線(有田～伊万里)',
		'西九州線(伊万里～佐世保)', '島原鉄道線', '長崎電軌１系統', '長崎電軌３系統', '長崎電軌４系統', '長崎電軌５系統', '熊本電鉄本線', '熊本電鉄上熊本線', '高森線', '湯前線', '肥薩おれんじ鉄道線', '熊本市電Ａ系統',
		'熊本市電Ｂ系統', '鹿児島市電１系統', '鹿児島市電２系統', 'ゆいレール'
	];
	$( ".aocomp" ).autocomplete({
		source: availableTags,
		showDropDown: true,
		dropDownPosition: 'bottom',
		backgroundColor: 'white'
	});
	$("#btn").on("touchend", function(){ // タッチ
		if (formcount < 7) { // フォームは6個までで
			$("#add").append('<font color="5f7396">駅' + formcount +'</font> <input name="line3" class="aocomp" type="text" autocomplete="off" placeholder="路線名を入力してください"><br class="br-sp">');
			$(".aocomp").autocomplete({ // 新フォームに対して予測候補の再適用
				source: availableTags,
				showDropDown: true,
				dropDownPosition: 'bottom',
				backgroundColor: 'white'
			});
			formcount += 1; // フォームを一つカウント
		}
	});
	$("#btn").click(function(){ // クリック
		if (formcount < 7) { // フォームは6個までで
			$("#add").append('<font color="5f7396">駅' + formcount +'</font> <input name="line3" class="aocomp" type="text" autocomplete="off" placeholder="路線名を入力してください"> <br class="br-sp">');
			$(".aocomp").autocomplete({ // 新フォームに対して予測候補の再適用
				source: availableTags,
				showDropDown: true,
				dropDownPosition: 'bottom',
				backgroundColor: 'white'
			});
			formcount += 1; // フォームを一つカウント
		}
	});
});
/*
$(document).ready(function(){

});
*/
/*
$(function(){
            var text = document.getElementsByClassName("text").value;
            var suggest = document.getElementsByClassName("suggest").value;
			var list = ['J','Java','JavaScript','JavaFX Script','JHDL','JScript .NET','JSX'];

			new new Suggest.Local(
				text,    //入力のエレメントID
				suggest, //補完候補を表示するエリアのID
				list,      //補完候補の検索対象となる配列
				//オプション
				{ dispMax: 5,    //候補の最大表示数
	              interval:1000, //候補を表示するまでの時間(ミリ秒)
				  highlight:true
                }
            );
});
	*/