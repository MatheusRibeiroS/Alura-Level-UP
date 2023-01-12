import { StoryInterface, UserInterface } from "../../interfaces/interfaces";

export default function StoryList({stories, user}: {stories: StoryInterface[], user: UserInterface}) {
  const orderedStories = stories.sort(
    (a: StoryInterface, b: StoryInterface) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <>
      {orderedStories.map((story: StoryInterface) => {
        return (
          <div className="flexpt-1 pb-1">
            <div key={story.id} className="bg-blue-900 text-white p-2">
              <section className="flex">
              <h2 className="font-bold text-orange-400 pr-2">{user.name},</h2>
              <div className="flex items-center">
              <p className="pr-2">em </p>
              <p>{new Date(story.createdAt).getDay()}</p>
              <p>/{new Date(story.createdAt).getMonth()}</p>
              <p>/{new Date(story.createdAt).getFullYear()}</p>
              </div>
              </section>
              <p className="text-center p-2">{story.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
