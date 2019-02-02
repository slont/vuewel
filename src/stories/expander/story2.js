export default {
  template: `
<div>
  <div class="field">
    <w-expander :content="description1" :max-count="140" :has-mask="false"
                open-text="すべて読む" close-text="閉じる">
    </w-expander>
  </div>
  <div class="field">
    <w-expander :content="description2" :max-count="140" :has-mask="false"
                open-text="すべて読む" close-text="閉じる">
    </w-expander>
  </div>
</div>`,
  data() {
    return {
      description1: `「妖怪ウォッチ」のレベルファイブと「パズドラ」のガンホーが強力タッグを結成！<br/>「妖怪ウォッチ」初の位置情報ゲームをお贈りします！<br/><br/>▼冒険の舞台は「日本全国」、主人公はあなた自身！<br/>ジバニャンやコマさんなど、「妖怪ウォッチ」シリーズの個性豊かな妖怪たちがリアルな世界に出現！<br/>日本の各地に出現する妖怪を探してバトル！<br/>「自ら移動したり」「他のプレイヤーに移動してもらったり」して妖怪を集めて、妖怪大辞典を充実させよう！<br/><br/>【基本的な遊び方】<br/>▼まずはマップを「サーチ」で妖怪を探そう！<br/>近くの妖怪を探すため、自分がいる場所でマップを「サーチ」。<br/>発見できる妖怪は、場所によりさまざま。<br/>新しい土地に足を運んだら、「サーチ」をする事を忘れずに！<br/><br/>▼スマホ画面の中で妖怪を発見！<br/>「サーチ」で出現した妖怪アイコンをタップ。<br/>すると、あなたのスマホ画面を通して妖怪が見えるように！<br/>逃げられないようにしっかりと追いかけて、妖怪を見つけだそう！<br/><br/>▼簡単操作で妖怪とバトルしよう！<br/>妖怪を探しだしたらバトル開始。<br/>セミオートバトルなのでとっても簡単。<br/>チャンスやピンチの時は「ひっさつわざ」を繰り出そう！<br/>妖怪とのバトルに勝てれば、「ともだち」になってくれるかも？<br/>「ともだち」になった妖怪を育成して、さらに強い妖怪とのバトルに備えよう！<br/><br/>【もっともっと楽しめる遊び方】<br/>▼周りのプレイヤーの力を借りて移動！<br/>周りのプレイヤーに自分の妖怪を「ヒョーイ」（憑依）させる事ができる。<br/>「ヒョーイ」した妖怪は、その人と一緒に移動して、新たな土地に。<br/>自分では行けない場所の妖怪を連れてきたり、お土産を持って帰ってきてくれたりするかも!?<br/>※周りのプレイヤーの表示によって、正確な現在位置が他人に知られるということはありませんのでご安心ください。<br/><br/>▼普段あまり行けない場所に「妖怪の木」を植えよう！<br/>自分が現在いる場所や、ヒョーイで移動した場所に木を植えることができる。<br/>木の周りには妖怪が集まってくるから、新たな出会いのチャンスに！<br/>「妖怪の木」をうまく使うと、妖怪をともだちにできる場所を増やせる！<br/><br/>▼他にも楽しみ方が盛りだくさん。じっくりたっぷりまったり遊んでみよう！<br/>妖怪ウォッチ ワールドは他にも楽しみ方がいっぱい！<br/>どこにいてもバトルが楽しめる「降臨ボス」、<br/>旅の記録を振り返れる「おでかけマップ」など……<br/>楽しみ方はあなた次第！ 自分なりの楽しみ方を見つけて自分のペースで遊ぼう！<br/><br/>【価格】 <br/>アプリ本体：無料 <br/>※一部有料アイテムがございます。 <br/><br/>ご利用前に「アプリケーション共通利用規約」に表示されている利用規約を必ずご確認ください。<br/>お客様がダウンロードボタンをクリックされ、本アプリケーションをダウンロードされた場合には、利用規約に同意したものとみなされます。<br/><br/>アプリケーション共通利用規約<br/>https://mobile.gungho.jp/reg/rules/terms.html<br/>プライバシー・ポリシー<br/>https://mobile.gungho.jp/reg/gnt/privacy/index.html<br/><br/>【注意】<br/>※正確な位置情報を取得するため、3G/4G回線でのプレイを推奨いたします。<br/>※GPS機能及びジャイロセンサー非搭載の端末や、Wi-Fi回線のみで接続している端末の動作は保証しておりませんので、ご注意ください。<br/><br/>©GungHo Online Entertainment, Inc. All Rights Reserved. ©LEVEL-5 Inc.`,
      description2: `「妖怪ウォッチ」のレベルファイブと「パズドラ」のガンホーが強力タッグを結成！`
    }
  }
}
