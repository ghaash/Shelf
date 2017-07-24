class Book < ApplicationRecord
    has_many :votes

    def upvote_count
        votes.size
    end

    
end
