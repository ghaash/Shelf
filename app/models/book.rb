class Book < ApplicationRecord

    def upvote_count
        votes.size
    end

    
end
