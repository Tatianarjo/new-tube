interface PageProps {
  params: Promise <{ videoId: string }>;
}
const Page = async ({ params }: PageProps) => {
    console.log("Server compontent")
    const { videoId } = await params;
    return (
    <div>
      Video Id: {videoId}
      </div>        
    );
}

export default Page;