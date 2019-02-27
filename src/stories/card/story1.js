export default {
  template: `
<div style="padding: 1rem">
  <w-columns multi>
    <div class="is-4">
      <w-card>
        <div class="card-image">
          <div class="image is-4by3">
            <img src="https://lh3.googleusercontent.com/BdQ1ngugnmV6uT960KOX0G9av7YJF4MnoEdSgi5xBINEC4YYuOp3Q7RUj7i4Cg0tRQ=w884" alt="">
          </div>
          <div class="hovered-mask"/>
        </div>
        <div class="card-content">hovered-mask</div>
      </w-card>
    </div>
    <div class="is-4">
      <w-card>
        <div class="card-image">
          <div class="image is-4by3">
            <img src="http://stat.ameba.jp/user_images/20170103/12/greenway0801/8e/5a/j/o0480089513836787217.jpg" alt="">
          </div>
        </div>
        <div class="card-content">Content</div>
        <div class="card-footer has-evenly">
          <w-button class="is-success" outlined><span>OK</span></w-button>
        </div>
      </w-card>
    </div>
    <div class="is-4">
      <w-card>
        <div class="card-image">
          <div class="image is-4by3">
            <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/humming_camino/20171002/20171002212620.jpg" alt="">
          </div>
        </div>
        <div class="card-content">Content</div>
        <div class="card-footer has-evenly">
          <w-button><span>Cancel</span></w-button>
          <w-button class="is-success" outlined><span>OK</span></w-button>
        </div>
      </w-card>
    </div>
    <div class="is-4">
      <w-card>
        <div class="card-image">
          <div class="image has-margin is-4by3">
            <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/humming_camino/20171002/20171002212620.jpg" alt="">
          </div>
        </div>
        <div class="card-content">has-margin</div>
      </w-card>
    </div>
  </w-columns>
</div>`
}
