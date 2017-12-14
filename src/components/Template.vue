<script>
import axios from 'axios'

export default {
  name: 'Template',
  created () {
    this.getTemplate()
  },
  methods: {
    async getTemplate () {
      try {
        const response = await axios.get('http://localhost:5432/template')
        if (response) window.open('http://localhost:5432/template', '_blank')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
