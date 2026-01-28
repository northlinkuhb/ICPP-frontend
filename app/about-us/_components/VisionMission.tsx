import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <div className="clamp-[py,40px,80px] grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
      <div className="text-black clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
        The Isaac Centre for Public Policy (ICPP) at Ashoka University is an attempt to build India's leading public policy centre, positioned at the nexus of academia, research, and policymaking, and recognised for generating ideas and evidence on Indian public policy.
        <br />
        <br />
        ICPP aims to achieve excellence in three strands of work — academic programmes and executive education, policymaker-led research including policy case studies and briefs, and public policy events and engagements.
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-deep-blue font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d]">Vision</h2>
          <hr className="text-light-gray my-[10px]" />
          <p className="text-black clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
            To build India's leading Public Policy Centre.
          </p>
        </div>
        <div>
          <h2 className="text-deep-blue font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d]">Mission</h2>
          <hr className="text-light-gray my-[10px]" />
          <p className="text-black clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
            To contribute towards accelerated, inclusive and sustainable growth that enables India to become a developed country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
