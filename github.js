class Github {
    constructor() {
        this.client_id = "63037dc03d16ce384b95";
        this.client_secret = "8e53b19f79e142727313d10d0a9547b9f401a78f";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}=&client_secret=${this.client_secret}`
        );
      
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}=&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return {
          profile,
          repos,
        };
    }
}