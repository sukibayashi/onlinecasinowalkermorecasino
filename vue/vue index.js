class Post {
    constructor(id, title, infolink, point1, point2,) {
        this.title = title;
        this.id = id;
        this.infolink = infolink;
        this.point1 = point1;
        this.point2 = point2;
    }
}

var app = new Vue({
    el: '#app',
    data: {
        search: '',
        postList: [
            new Post(
                '188ベット',
                '188bet',
                'https://onlinecasino-walker.com/ranking/188bet/',
                '①スポーツやロトやポーカー、麻雀多くなギャンブルゲームが用意されています。',
                '②超お得な<span class="markyellow">200％初回入金ボーナス</span>。'),
            new Post(
                'intercasino',
                '188bet',
                'https://onlinecasino-walker.com/ranking/188bet/',
                '①スポーツやロトやポーカー、麻雀多くなギャンブルゲームが用意されています。',
                '②超お得な<span class="markyellow">200％初回入金ボーナス</span>。')],
        livecasinoshow: true,
        slotcasinoshow: true,
        allcasinolist: false,
        changeimgdeg: false,
        methods: {
            livecasinoShow() {
                this.livecasinoshow = true;
                this.slotcasinoshow = false
            },
            slotcasinoShow() {
                this.livecasinoshow = false;
                this.slotcasinoshow = true
            },
            allcasinoShow() {
                this.livecasinoshow = true,
                    this.slotcasinoshow = true
            },
            allcasinoList() {
                this.allcasinolist = !this.allcasinolist;
                this.changeimgdeg = !this.changeimgdeg
            }
        },
    },
    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
});