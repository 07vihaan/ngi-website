function MemberCard({ person, style }) {
  return (
    <div className="team-member reveal" style={style}>
      <div className="member-image-container">
        <img
          src={`/images/${person.image}.jpg`}
          alt={person.name}
          className="member-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="member-image-placeholder">
          <span>Photo</span>
        </div>
      </div>
      <h4>{person.name}</h4>
      <p className="role">{person.role}</p>
    </div>
  );
}

export default MemberCard;
