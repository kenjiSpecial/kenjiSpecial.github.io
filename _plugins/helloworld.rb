module Jekyll
	class HelloWorldPage < Page
		def initialize(site, base, dir)
			@site, @base, @dir = site, base, dir
			@name = 'helloworld.html'

			self.process(@name)
			self.content = '<html><body>Hello, World!</body></html>'
			self.data = {}
		end
	end

	class HelloWorldGenerator < Generator
		safe true

		def generate(site)
			site.pages << HelloWorldPage.new(site, site.source, '/')
		end
	end
end
