module Jekyll
  module StringFilter

    # Usage: {{ string | startswith: "begins" | jsonify }}
    def startswith(text, query)
     return text.start_with? query
    end

    # Usage: {{ string | endswith: "ends" | jsonify }}
    def endswith(text, query)
      return text.end_with? query
     end

  end
end

Liquid::Template.register_filter(Jekyll::StringFilter)
