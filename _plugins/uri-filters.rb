module Jekyll
  module UriFilters

    # Usage: {{ string | uri_join: "path" | jsonify }}
    def uri_join(base, append)
      # NOTE: URI.join requires absolute base
      return File.join(base, append)
    end

  end
end

Liquid::Template.register_filter(Jekyll::UriFilters)
