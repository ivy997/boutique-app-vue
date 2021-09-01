import { Options, Vue } from "vue-class-component";
import HeaderInfo from "@/components/HeaderInfo/index.vue";
import Navbar from "@/components/Navbar/index.vue";
import SearchBar from "@/components/SearchBar/index.vue"
import LoginRegisterModal from "@/components/LoginRegisterModal/index.vue";

@Options({
  name: "my-header",
  components: {
    HeaderInfo,
    Navbar,
    SearchBar,
    LoginRegisterModal
  },
})
export default class Header extends Vue {
  public msg = "Header";
}
