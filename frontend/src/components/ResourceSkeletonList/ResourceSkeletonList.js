import ResourceSkeleton from "../ResourceSkeleton/ResourceSkeleton";
function ResourceSkeletonList({ resources }) {
  return (
    <div className="resource-list">
      {[...Array(20)].map((_, index) => (
        <ResourceSkeleton key={`skeleton${index}`} />
      ))}
    </div>
  );
}

export default ResourceSkeletonList;
